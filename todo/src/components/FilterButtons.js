const FilterButtons = (props) => {
  const { saveBox, setTaskListsFiltered } = props;

  // Функция выводит весь список
  const handleAllClick = () => {
    setTaskListsFiltered(saveBox);
  };
  // Выводить только отмеченные задачи
  const handleDoneClick = () => {
    setTaskListsFiltered(saveBox.filter((item) => item.checked === true));
  };
  // Выводит только не отмеченные задачи
  const handleUndoneClick = () => {
    setTaskListsFiltered(saveBox.filter((item) => item.checked === false));
  };
  // Фильтрует по убыванию
  const handleSortUp = () => {
    const newArr = [...saveBox].sort((a, b) => {
      if (a.date.getTime() < b.date.getTime()) return 1;
      if (a.date.getTime() > b.date.getTime()) return -1;
      return 0;
    });
    setTaskListsFiltered(newArr);
  };
  // Фильтрует по возрастанию
  const handleSortDown = () => {
    const newArr = [...saveBox].sort((a, b) => {
      if (a.date.getTime() > b.date.getTime()) return 1;
      if (a.date.getTime() < b.date.getTime()) return -1;
      return 0;
    });
    setTaskListsFiltered(newArr);
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

export default FilterButtons;
