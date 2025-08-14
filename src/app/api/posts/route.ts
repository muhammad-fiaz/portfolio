import { NextResponse } from 'next/server';

interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
  tags: { name: string }[];
}

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
}

interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes?: number;
  coverImage?: string;
  tags: { name: string }[];
  source: 'hashnode' | 'medium';
}

const HASHNODE_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const posts: Post[] = [];

    // Fetch from Hashnode
    const hashnodeHost = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
    if (hashnodeHost) {
      try {
        const hashnodeResponse = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.HASHNODE_API_TOKEN || '',
          },
          body: JSON.stringify({
            query: HASHNODE_QUERY,
            variables: {
              host: hashnodeHost,
              first: 10,
            },
          }),
          cache: 'force-cache',
          next: {
            revalidate: 3600, // Cache for 1 hour
          },
        });

        if (hashnodeResponse.ok) {
          const hashnodeData = await hashnodeResponse.json();
          const hashnodePosts = hashnodeData?.data?.publication?.posts?.edges || [];
          
          hashnodePosts.forEach((edge: { node: HashnodePost }) => {
            const post = edge.node;
            posts.push({
              id: `hashnode-${post.id}`,
              title: post.title,
              brief: post.brief,
              slug: post.slug,
              url: post.url,
              publishedAt: post.publishedAt,
              readTimeInMinutes: post.readTimeInMinutes,
              coverImage: post.coverImage?.url,
              tags: post.tags.map(tag => ({ name: tag.name })),
              source: 'hashnode',
            });
          });
        }
      } catch (error) {
        console.error('Error fetching Hashnode posts:', error);
      }
    }

    // Fetch from Medium RSS
    const mediumUsername = process.env.NEXT_PUBLIC_MEDIUM_USERNAME;
    if (mediumUsername) {
      try {
        // Use RSS2JSON service to convert RSS to JSON
        const mediumResponse = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`,
          {
            cache: 'force-cache',
            next: {
              revalidate: 3600, // Cache for 1 hour
            },
          }
        );

        if (mediumResponse.ok) {
          const mediumData = await mediumResponse.json();
          const mediumPosts = mediumData?.items || [];
          
          mediumPosts.slice(0, 10).forEach((post: MediumItem, index: number) => {
            // Extract brief from content
            const brief = post.description
              ?.replace(/<[^>]*>/g, '') // Remove HTML tags
              ?.substring(0, 200) + '...';
            
            posts.push({
              id: `medium-${index}-${post.link}`,
              title: post.title,
              brief: brief || 'No description available',
              slug: post.link.split('/').pop() || '',
              url: post.link,
              publishedAt: post.pubDate,
              readTimeInMinutes: Math.ceil((post.description?.length || 0) / 200), // Rough estimate
              coverImage: extractImageFromContent(post.description),
              tags: post.categories?.map((cat: string) => ({ name: cat })) || [],
              source: 'medium',
            });
          });
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    }

    // Sort by publish date (newest first)
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return NextResponse.json(posts.slice(0, 20), {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

function extractImageFromContent(content: string): string | undefined {
  if (!content) return undefined;
  
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}
