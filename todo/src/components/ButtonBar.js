const ButtonBar = (props) => {
  const { setTasksList, tasksList, x } = props;

  const handleDoneClick = () => {
    setTasksList(x.filter((item) => item.checked === true));
  };
  const handleUndoneClick = () => {
    setTasksList(x.filter((item) => item.checked === false));
  };
  const handleAllClick = () => {
    setTasksList(x);
  };
  const handleSortUp = () => {
    const newArr = [...x].sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });
    setTasksList(newArr);
  };
  const handleSortDown = () => {
    const newArr = [...x].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
    setTasksList(newArr);
  };

  return (
    <div className="buttons">
      <div className="buttonsMain">
        <button onClick={handleAllClick} className="buttonsMainItem">
          All
        </button>
        <button onClick={handleDoneClick} className="buttonsMainItem">
          Done
        </button>
        <button onClick={handleUndoneClick} className="buttonsMainItem">
          Undone
        </button>
      </div>

      <div className="buttonsSort">
        <div className="buttonsSortText">Sort by date</div>

        <div className="buttonsSortArrows">
          <button onClick={handleSortUp} className="buttonsSortArrowsItem">
            /\
          </button>
          <button onClick={handleSortDown} className="buttonsSortArrowsItem">
            \/
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
