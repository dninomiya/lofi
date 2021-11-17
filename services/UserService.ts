import { addDays, formatDuration, intervalToDuration } from 'date-fns';
import { ja } from 'date-fns/locale';

export const getGraceTimeToExpulsion = (lastLoggedIn: number): string => {
  const limit = addDays(lastLoggedIn, 2);
  const duration = intervalToDuration({
    start: Date.now(),
    end: limit,
  });

  return formatDuration(duration, {
    locale: ja,
    format: ['days', 'hours', 'minutes', 'seconds'],
    delimiter: '',
  });
};
