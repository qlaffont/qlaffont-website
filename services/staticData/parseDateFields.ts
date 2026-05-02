import { isEmpty } from 'lodash';

export function parseStartDate(value: string | { start: string }): Date {
  return new Date(typeof value === 'string' ? value : value.start);
}

export function parseEndDate(value: null | undefined | string | { start: string }): Date | undefined {
  if (value == null) return undefined;
  if (typeof value === 'string') {
    return isEmpty(value) ? undefined : new Date(value);
  }
  if (!value.start || isEmpty(value.start)) return undefined;
  return new Date(value.start);
}

export function parseDiplomaDate(value: string | { start: string }): Date {
  return typeof value === 'string' ? new Date(value) : new Date(value.start);
}
