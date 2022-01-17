import { useState } from 'react';

const ButtonBar = (props) => {
  const { tasksList, setTasksList } = props;

  const [x, setX] = useState(tasksList);

  const handleDoneClick = () => {
    setX(tasksList);
    setTasksList(tasksList.filter((item) => item.checked === true));
  };
  const handleUndoneClick = () => {
    setX(tasksList);
    console.log(x);
    setTasksList(tasksList.filter((item) => item.checked === false));
  };
  const handleAllClick = () => {
    setTasksList(x);
    console.log(x);
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
