import { format } from 'date-fns';

export const formatTime = (date: Date): string => {
  return format(date, 'H:mm');
};

export const formatDay = (date: Date): string => {
  return format(date, 'EEE');
};

export const formatFriendlyDate = (date: Date): string => {
  return format(date, 'eeee do LLLL');
};

export const formatFriendlyTime = (date: Date): string => {
  return format(date, 'h:mm a');
};

export const formatShortDate = (date: Date): string => {
  return format(date, 'dd/M');
};

export const getFromLocalStorage = <T>(storageKey: string): T | undefined => {
  const item = localStorage.getItem(storageKey);

  if (!item) {
    return undefined;
  }

  return JSON.parse(item);
};

export const setToLocalStorage = <T>(storageKey: string, value: T): void => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};
