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
                <TimelineEvent.Title>Sr. Software Enginer - ParcelDaily | Oct. 2024 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Building and helping revamp the old system into a newer and cleaner version at ParcelDaily. Involved in Frontend and Backend development.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Web Programmer - Pacific Comnet Sdn. Bhd | May. 2023 - Aug. 2024</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Maintain an existing internal system for the company while also upgrading and maintaining deprecated npm packages for the system.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Full-Stack Developer - Cake Experiential Communications | July. 2021 - May. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Build and deploy an internal app from scratch for a bank client using flutter and bloc implementation. Develop SAAS solutions with pagebuilder and chatbot integration.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Backend Developer - Insuradar Sdn. Bhd. | Oct. 2020 - Dec. 2020</TimelineEvent.Title>
                <TimelineEvent.Description>
                Manage extracted data from AI engine and use relevant information to automates tasks. Also Implemented audit logs, webhook and security permission for application.
                </TimelineEvent.Description>
            </TimelineEvent>
            <TimelineEvent>
                <TimelineEvent.Title>Full-Stack Developer - Yan3k Sdn. Bhd. | Aug. 2019 - Dec. 2020</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Develop a SAAS API from ground up complete with payment integration with stripe. Containerized company's project into docker for
                    consistent working environment and deployment to GKE while also utilizing other Google Cloud Platform services such as Bucket, CloudSQL
                    and Cloudbuild in building/deploying project.
                </TimelineEvent.Description>
            </TimelineEvent>
            <TimelineEvent>
                <TimelineEvent.Title>Junior Developer - Segnel Ventures Pte. Ltd | May. 2018 - Jul. 2018</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Actively contributing to and maintaining in-house web-based CRM software and E-Commerce solutions.
                </TimelineEvent.Description>
            </TimelineEvent>

        </Timeline>
    );
}

export default CurrentTimeLineExp;
