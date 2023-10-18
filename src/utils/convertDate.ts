export const convertDate = (date:Date) => {
  return new Date(date).toLocaleDateString('ko', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
