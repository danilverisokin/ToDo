const Filter = (props) => {
  const {
    handleAllClick,
    handleDoneClick,
    handleUndoneClick,
    handleSortUp,
    handleSortDown,

    buttonActiveDone,
    buttonActiveAll,
    buttonActiveUndone,
    buttonSortUpActive,
    buttonSortDownActive,
  } = props;

  return (
    <div className="buttons">
      <div className="buttonsMain">
        <button
          onClick={handleAllClick}
          className={buttonActiveAll ? 'buttonsMainItemPushed' : 'buttonsMainItem'}
        >
          All
        </button>
        <button
          onClick={handleDoneClick}
          className={buttonActiveDone ? 'buttonsMainItemPushed' : 'buttonsMainItem'}
        >
          Done
        </button>
        <button
          onClick={handleUndoneClick}
          className={buttonActiveUndone ? 'buttonsMainItemPushed' : 'buttonsMainItem'}
        >
          Undone
        </button>
      </div>

      <div className="buttonsSort">
        <div className="buttonsSortText">Sort by date</div>

        <div className="buttonsSortArrows">
          <button
            onClick={handleSortUp}
            className={buttonSortUpActive ? 'buttonsSortArrowsItemPushed' : 'buttonsSortArrowsItem'}
          >
            /\
          </button>
          <button
            onClick={handleSortDown}
            className={
              buttonSortDownActive ? 'buttonsSortArrowsItemPushed' : 'buttonsSortArrowsItem'
            }
          >
            \/
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
