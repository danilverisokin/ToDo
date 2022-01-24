export const getPagesAmount = (count) => {
  const pagesAmount = Math.ceil(count / 5);

  const pages = new Array(pagesAmount).fill('').map((_, idx) => idx + 1);

  return pages;
};
