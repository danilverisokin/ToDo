const TaskBar = (props) => {
  const { tasksList, setTasksList } = props;

  const handleClick = (event) => {
    const filteredNewArr = tasksList.filter(({ id }) => id !== event.target.id);

    setTasksList(filteredNewArr);
  };
  return (
    <ul className="taskList">
      {tasksList.map(({ name, id }) => (
        <li key={id} className="taskListItem">
          <div className="taskListItemHalf">
            <input className="taskListItemElem taskListItemCheckbox" type="checkbox" />

            <span>{name}</span>
          </div>
          <div className="taskListItemHalf">
            <input className="taskListItemElem taskListItemDate" type="date" />

            <button id={id} onClick={handleClick} className="taskListItemElem taskListItemButton">
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskBar;
