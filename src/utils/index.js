export const getPagesAmount = (count) => {
  const pagesAmount = Math.ceil(count / 5);

  return pagesAmount;
};
