import { useState } from 'react';

const DoneFilter = (props) => {
  const { saveBox, setTaskListsFiltered, taskListsFiltered } = props;

  const [buttonActiveDone, setButtonActiveDone] = useState();
  const [buttonActiveAll, setButtonActiveAll] = useState();
  const [buttonActiveUndone, setButtonActiveUndone] = useState();

  const [buttonSortUpActive, setButtonSortUpActive] = useState();
  const [buttonSortDownActive, setButtonSortDownActive] = useState();

  // Функция выводит весь список
  const handleAllClick = () => {
    setTaskListsFiltered(saveBox);
    setButtonActiveDone(false);
    setButtonActiveAll(true);
    setButtonActiveUndone(false);
  };
  // Выводить только отмеченные задачи
  const handleDoneClick = () => {
    setTaskListsFiltered(saveBox.filter((item) => item.checked === true));
    setButtonActiveDone(true);
    setButtonActiveAll(false);
    setButtonActiveUndone(false);
  };

  // Выводит только не отмеченные задачи
  const handleUndoneClick = () => {
    setTaskListsFiltered(saveBox.filter((item) => item.checked === false));
    setButtonActiveDone(false);
    setButtonActiveAll(false);
    setButtonActiveUndone(true);
  };
  // Фильтрует по убыванию
  const handleSortUp = () => {
    const newArr = [...taskListsFiltered].sort((a, b) => {
      if (a.date.getTime() < b.date.getTime()) return 1;
      if (a.date.getTime() > b.date.getTime()) return -1;
      return 0;
    });
    setTaskListsFiltered(newArr);
    setButtonSortUpActive(true);
    setButtonSortDownActive(false);
  };
  // Фильтрует по возрастанию
  const handleSortDown = () => {
    const newArr = [...taskListsFiltered].sort((a, b) => {
      if (a.date.getTime() > b.date.getTime()) return 1;
      if (a.date.getTime() < b.date.getTime()) return -1;
      return 0;
    });
    setTaskListsFiltered(newArr);
    setButtonSortUpActive(false);
    setButtonSortDownActive(true);
  };

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

export default DoneFilter;
