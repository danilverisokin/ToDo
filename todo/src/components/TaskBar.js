const TaskBar = (props) => {
  const { tasksList, setTasksList } = props;

  const handleClick = (event) => {
    const newArr = [...tasksList];
    const filteredNewArr = newArr.filter((_, index) => index !== Number(event.target.id));
    setTasksList(filteredNewArr);
  };
  return (
    <ul className="taskList">
      {tasksList.map((el, index) => (
        <li key={index} className="taskListItem">
          <div className="taskListItemHalf">
            <input className="taskListItemElem taskListItemCheckbox" type="checkbox" />

            <span>{el}</span>
          </div>
          <div className="taskListItemHalf">
            <input className="taskListItemElem taskListItemDate" type="date" />

            <button
              id={index}
              onClick={handleClick}
              className="taskListItemElem taskListItemButton"
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskBar;
