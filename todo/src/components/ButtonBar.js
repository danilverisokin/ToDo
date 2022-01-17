const ButtonBar = (props) => {
  const { setTasksList, x } = props;

  const handleDoneClick = () => {
    setTasksList(x.filter((item) => item.checked === true));
  };
  const handleUndoneClick = () => {
    setTasksList(x.filter((item) => item.checked === false));
  };
  const handleAllClick = () => {
    setTasksList(x);
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
          <button className="buttonsSortArrowsItem">/\</button>
          <button className="buttonsSortArrowsItem">\/</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
