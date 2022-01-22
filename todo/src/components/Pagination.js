const Pagination = (props) => {
  const { page, pages, handleFirstPage, handleChangePage, handleLastPage } = props;

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
