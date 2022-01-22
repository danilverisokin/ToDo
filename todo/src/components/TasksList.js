const TasksList = (props) => {
  const {
    tasksList,
    handleCheckbox,
    handleKeyDown,
    editCardId,
    newCardName,
    handleChange,
    handleEdit,
    handleChangeData,
    handleClickDelete,
  } = props;

  return (
    <ul className="taskList">
      {tasksList.map(({ name, id, checked, date }) => (
        <li key={id} className="taskListItem">
          <div className="taskListItemHalf">
            <input
              onChange={(e) => handleCheckbox(e, id)}
              checked={checked}
              className="taskListItemElem taskListItemCheckbox"
              type="checkbox"
            />

            {editCardId === id ? (
              <input
                onKeyDown={handleKeyDown}
                type="text"
                value={newCardName}
                onChange={handleChange}
                onBlur={(e) => handleKeyDown(e, true)}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEdit(name, id)} className="taskListItemText">
                {name}
              </span>
            )}
          </div>

          <div className="taskListItemHalf">
            <input
              className="taskListItemElem taskListItemDate"
              type="date"
              onChange={(e) => handleChangeData(e, id)}
              value={date.toISOString().slice(0, 10)}
            />

            <button
              onClick={() => handleClickDelete(id)}
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

export default TasksList;
