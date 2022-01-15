import { useState } from 'react';

const TaskBar = (props) => {
  const { tasksList, setTasksList, editCardId, setEditCardId } = props;
  const [newCardName, setNewCardName] = useState();

  const handleClick = (event) => {
    const filteredNewArr = tasksList.filter(({ id }) => id !== event.target.id);
    setTasksList(filteredNewArr);
  };

  const handleEdit = (event, name) => {
    setEditCardId(event.target.id);
    setNewCardName(name);
  };
  const handleChange = (e) => {
    setNewCardName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newArr = tasksList.map((item) => {
        if (item.id === editCardId) {
          return {
            ...item,
            name: newCardName,
          };
        }
        return item;
      });
      setTasksList(newArr);
      setEditCardId(null);
    }
    if (e.key === 'Escape') {
      setEditCardId(null);
    }
  };

  return (
    <ul className="taskList">
      {tasksList.map(({ name, id }) => (
        <li key={id} className="taskListItem">
          <div className="taskListItemHalf">
            <input className="taskListItemElem taskListItemCheckbox" type="checkbox" />

            {editCardId === id ? (
              <input
                onKeyDown={handleKeyDown}
                type="text"
                value={newCardName}
                onChange={handleChange}
                autoFocus
              />
            ) : (
              <span id={id} onClick={(e) => handleEdit(e, name)} className="taskListItemText">
                {name}
              </span>
            )}
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
