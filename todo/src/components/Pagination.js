const Pagination = (props) => {
  const { page, pages, handleChangePage } = props;

  return (
    <div className="slider">
      <button onClick={() => handleChangePage(1)} className="sliderItem sliderArrow">
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

      <button onClick={() => handleChangePage(pages.length)} className="sliderItem sliderArrow">
        -&gt;
      </button>
    </div>
  );
};

export default Pagination;
