import { format, isAfter, isBefore } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatTime = (date?: Date): string => {
  return date ? format(date, 'H:mm') : '';
};

export const formatDay = (date?: Date): string => {
  return date ? format(date, 'EEE') : '';
};

export const formatFriendlyDate = (date?: Date): string => {
  return date ? format(date, 'eeee do LLLL') : '';
};

export const formatFriendlyTime = (date?: Date): string => {
  return date ? format(date, 'h:mm a') : '';
};

export const formatShortDate = (date?: Date): string => {
  return date ? format(date, 'dd/M') : '';
};

export const formatShortHour = (date?: Date): string => {
  return date ? format(date, 'ha') : '';
};

export const convertEpochSecondsToDate = (
  epochSeconds: number | undefined,
  timezone: string,
): Date | undefined => {
  return epochSeconds
    ? utcToZonedTime(epochSeconds * 1000, timezone)
    : undefined;
};

export const zeroIfUndefined = (value?: number): number => {
  return value || 0;
};

export const roundNumberOrZero = (value?: number): number => {
  return Math.round(zeroIfUndefined(value));
};

export const isCurrentTimeNight = (
  localTime?: Date,
  sunriseTime?: Date,
  sunsetTime?: Date,
): boolean => {
  if (!localTime || !sunriseTime || !sunsetTime) {
    return false;
  }

  return isBefore(localTime, sunriseTime) || isAfter(localTime, sunsetTime);
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
