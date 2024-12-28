import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
    return (
        <Timeline>

            <TimelineEvent>
                <TimelineEvent.Title>Fiaz Technologies | Nov. 2023 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                  Building developer-first tools at Fiaz Technologies to enhance productivity. Focused on creating innovative solutions that empower developers.                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Hacktoberfest 2024 | Oct. 2024 - Nov. 2024</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>CodSoft - Data Science Intern | Sep. 2023 - Oct. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Self-paced Data Science Intern where I gained practical experience in data science applications using Python. I also contributed to open-source projects and maintained repositories on GitHub.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Hacktoberfest 2023 | Sep. 2023 - Oct. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Technical Content Writer | Sep. 2023 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Writing technical content and tutorials on platforms like Medium, Dev.to, and Hashnode. Topics include software development, data science, and open-source contributions.
                </TimelineEvent.Description>
            </TimelineEvent>
            <TimelineEvent>
                <TimelineEvent.Title>Open Source Contributor & Maintainer | Dec. 2020 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Actively contributing to and maintaining open-source repositories on GitHub. Focused on building and improving tools for the developer community.
                </TimelineEvent.Description>
            </TimelineEvent>

        </Timeline>
    );
}

export default CurrentTimeLineExp;
