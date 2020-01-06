import dayjs from 'dayjs';

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function days_of_a_year(year) {
  return isLeapYear(year) ? 366 : 365;
}

function round(num, decimal = 2) {
  return Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

export function getRemainingDays() {
  const today = dayjs();
  const currentYear = dayjs().year();
  const yearEnd = dayjs(`${currentYear}-12-31`);
  const days = (days_of_a_year(currentYear) - yearEnd.diff(today, 'day', true)) * 100 / days_of_a_year(currentYear);
  return round(days);
}

export function getRemainingHours() {
  const now = dayjs();
  const dayEnd = dayjs().endOf('day');
  const hours = (86400 - dayEnd.diff(now, 'second', true)) * 100 / 86400;
  return round(hours)
}

export function getRemainingDaysInWeek() {
  const now = dayjs();
  const weekEnd = dayjs().endOf('week');
  const hours = (604800 - weekEnd.diff(now, 'second', true)) * 100 / 604800;
  return round(hours);
}

// export function getRemainingWorkDayHours(start = 9, end = 17) {
//   const now = dayjs();
//   const dayEnd = dayjs().hour(hour);
//   const hours = ()
// }