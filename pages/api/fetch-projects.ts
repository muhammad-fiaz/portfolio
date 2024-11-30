import { siteConfig } from '@/src/configs/config';

const GITHUB_USERNAME = siteConfig.social.github;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Retrieve the GitHub token from .env.local

if (!GITHUB_TOKEN) {
  throw new Error('GitHub token is not defined in .env.local');
}

export default async function handler(
  req: { query: { search?: string } },
  res: {
    status: (arg0: number) => { (): any; new (): any; json: (arg0: any) => void };
  }
) {
  const { search } = req.query; // Get the search query from the URL (optional)

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}` // Include the token in the request header
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const data = await response.json();

    // Fetch topics for each repository
    const projectsWithTopics = await Promise.all(
      data.map(async (repo: any) => {
        const topicsResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json',
            }
          }
        );

        const topicsData = await topicsResponse.json();
        const topics = topicsData.names || [];

        return {
          id: repo.id.toString(),
          title: repo.name,
          des: repo.description || 'No description provided.',
          category: repo.language ? repo.language.toLowerCase() : 'unknown',
          repo: repo.html_url,
          link: repo.homepage || repo.html_url,
          topics, // Add topics to the project data
        };
      })
    );

    // Filter projects based on the search query if provided
    const filteredProjects = search
      ? projectsWithTopics.filter(
        (project: { category: string; title: string; topics: string[] }) =>
          project.category.toLowerCase().includes(search.toLowerCase()) ||
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.topics.some((topic) =>
            topic.toLowerCase().includes(search.toLowerCase())
          )
      )
      : projectsWithTopics;

    // Send the filtered projects as a response
    res.status(200).json(filteredProjects);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    res.status(500).json({ message: 'Error fetching repositories' });
  }
}
