const TaskBar = (props) => {
  const { tasksList, setTasksList } = props;

  // const handleClick = () => {
  //   setTasksList(() => tasksList.remove(e.getAttribute('key')));
  // };

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

            <input
              // onClick={handleClick}
              className="taskListItemElem taskListItemButton"
              type="button"
              value="X"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskBar;
