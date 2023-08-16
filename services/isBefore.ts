import dayjs from 'dayjs';

export const isBefore = (dateFrom: Date, dateTo: Date) => {
  return dayjs(dateFrom).isBefore(dateTo);
};
