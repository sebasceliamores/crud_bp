export const formatDate_mm_dd_yyyy = (date: Date) => {
  if (!date) {
    return '';
  }
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const addOneYear = (date: Date) => {
  if (!date) {
    return new Date();
  }
  return new Date(date.setFullYear(date.getFullYear() + 1));
};
