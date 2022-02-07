import { intervalToDuration } from 'date-fns';

export const secToMin = (seconds: number) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  return `${duration.minutes?.toString().padStart(2, '0')}:${duration.seconds
    ?.toString()
    .padStart(2, '0')}`;
};
