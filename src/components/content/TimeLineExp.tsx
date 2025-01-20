'use client';
import classNames from 'classnames';
import AnimationContainer from '../utils/AnimationContainer';
import { TimelineEventProps } from '@/src/types';
import SectionHeader from '@/src/components/ui/SectionHeader';

// Main Timeline container component
export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        title="Experience"
        content="I’ve had the opportunity to gain valuable experience as a software developer, both as a freelancer and as an open-source contributor. Below is a summary of my work and the skills I've developed along the way."
      />

      {children}
    </AnimationContainer>
  );
};

// TimelineEvent component that handles the individual event's layout and appearance
export const TimelineEvent = ({
  active,
  children,
  last
}: TimelineEventProps) => {
  return (
    <div
      className={classNames(
        'w-full flex justify-start gap-6 border-neutral-300 dark:border-neutral-700',
        {
          'border-l': !last,
          'pb-16': !last
        }
      )}
    >
      <div className="relative">
        <div
          className={classNames(
            'absolute top-[-2px] left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black dark:outline-neutral-900',
            {
              'bg-emerald-500': active,
              'bg-neutral-300 dark:bg-neutral-700': !active,
              'w-3 h-3': !active,
              'left-[-5.5px]': !active
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                'absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-emerald-500 animate-ping aspect-square'
              )}
            />
          )}
        </div>
      </div>
      <div className="mt-[-4px] flex flex-col gap-2">{children}</div>
    </div>
  );
};

// TimelineEvent.Title for event title
const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-black dark:text-white">{children}</p> // Dark theme: white text
);

// TimelineEvent.Description for event description
const TimelineEventDescription = ({
  children
}: {
  children: React.ReactNode;
}) => {
  // Ensure children is a string before performing replacement
  const formattedDescription =
    children && typeof children === 'string'
      ? children.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      : children;

  return (
    <p
      className="text-base text-gray-600 dark:text-gray-400"
      dangerouslySetInnerHTML={{ __html: formattedDescription as string }}
    />
  ); // Dark theme: dimmed white text, bold text inside ** will be bolded
};

// Attach the Title and Description as static properties of TimelineEvent
TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export default TimelineEvent;
