import { format } from 'date-fns';

export const formatTime = (date: Date | undefined): string | undefined => {
  return !date ? undefined : format(date, 'yyyy-MM-dd HH:mm:ss');
};
