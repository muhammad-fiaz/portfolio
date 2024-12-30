import classNames from 'classnames';
import AnimationContainer from '../utils/AnimationContainer';
import { TimelineEventProps } from '@/src/types';

// Main Timeline container component
export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Experience
      </h2>
      {children}
    </AnimationContainer>
  );
};

// TimelineEvent component that handles the individual event's layout and appearance
export const TimelineEvent = ({ active, children, last }: TimelineEventProps) => {
  return (
    <div
      className={classNames('w-full flex justify-start gap-6 border-neutral-300 dark:border-neutral-700', {
        'border-l': !last,
        'pb-16': !last,
      })}
    >
      <div className='relative'>
        <div
          className={classNames(
            'absolute top-[-2px] left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black dark:outline-neutral-900',
            {
              'bg-emerald-500': active,
              'bg-neutral-300 dark:bg-neutral-700': !active,
              'w-3 h-3': !active,
              'left-[-5.5px]': !active,
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
      <div className='mt-[-4px] flex flex-col gap-2'>{children}</div>
    </div>
  );
};

// TimelineEvent.Title for event title
const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p className='text-base text-black dark:text-white'>{children}</p>  // Dark theme: white text
);

// TimelineEvent.Description for event description
const TimelineEventDescription = ({ children }: { children: React.ReactNode }) => (
  <p className='text-base text-gray-600 dark:text-gray-400'>{children}</p>  // Dark theme: dimmed white text
);

// Attach the Title and Description as static properties of TimelineEvent
TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export default TimelineEvent;
