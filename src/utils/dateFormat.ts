const intl = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  //hour: 'numeric',
  //minute: 'numeric',
  timeZone: 'UTC',
});

export const dateFormat = (date: Date) => intl.format(date);
