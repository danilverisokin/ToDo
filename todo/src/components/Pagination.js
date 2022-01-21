const Pagination = (props) => {
  const { taskListsFiltered, setPage, page } = props;

  const getPagesAmount = (items) => {
    const pagesAmount = Math.ceil(items.length / 5);

    const pages = new Array(pagesAmount).fill('').map((_, idx) => idx + 1);

    return pages;
  };

  const handleChangePage = (item) => {
    setPage(item);
  };
  const handleLastPage = () => {
    setPage(pages.length);
  };
  const handleFirstPage = () => {
    setPage(1);
  };

  const pages = getPagesAmount(taskListsFiltered);

  return (
    <div className="slider">
      <button onClick={handleFirstPage} className="sliderItem sliderArrow">
        &lt;-
      </button>

      {pages.map((item) => (
        <button
          key={item}
          onClick={() => handleChangePage(item)}
          className={page === item ? 'buttonsPaginationActive' : 'sliderItem'}
        >
          {item}
        </button>
      ))}

      <button onClick={handleLastPage} className="sliderItem sliderArrow">
        -&gt;
      </button>
    </div>
  );
};

export default Pagination;
