import { format } from 'date-fns';

export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm');
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

export const getFromLocalStorage = <T>(storageKey: string): any => {
  return JSON.parse(window.localStorage.getItem(storageKey) || '') as T;
};

export const setToLocalStorage = <T>(storageKey: string, value: T): void => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};
