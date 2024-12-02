import classNames from 'classnames';
import AnimationContainer from '../utils/AnimationContainer';
import { TimelineEventProps } from '@/src/types';

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        Experience
      </h2>

      {children}
    </AnimationContainer>
  );
};

export const TimelineEvent = ({ active, children, last }: TimelineEventProps) => {
  return (
    <div
      className={classNames('w-full flex justify-start gap-6 border-neutral-800', {
        'border-l': !last,
        'pb-16': !last,
      })}
    >
      <div className='relative'>
        <div
          className={classNames(
            'absolute top-[-2px] left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black',
            {
              'bg-emerald-500': active,
              'bg-neutral-800': !active,
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
}

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => <p className='text-base text-gray-400'>{children}</p>;

const TimelineEventDescription = ({ children }: { children: React.ReactNode }) => <p className='text-base text-gray-400'>{children}</p>;

TimelineEvent.Title = TimelineEventTitle;

TimelineEvent.Description = TimelineEventDescription;