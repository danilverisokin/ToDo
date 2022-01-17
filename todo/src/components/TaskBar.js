import { useState } from 'react';

const TaskBar = (props) => {
  const { tasksList, setTasksList, editCardId, setEditCardId, setX, x } = props;
  const [newCardName, setNewCardName] = useState();

  const handleClick = (actId) => {
    const filteredNewArr = x.filter(({ id }) => id !== actId);
    setTasksList(filteredNewArr);
    setX(filteredNewArr);
  };

  const handleEdit = (name, id) => {
    setEditCardId(id);
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
      setX(newArr);
      setTasksList(newArr);
      setEditCardId(null);
    }
    if (e.key === 'Escape') {
      setEditCardId(null);
    }
  };

  const handleCheckbox = (e, chId) => {
    const newArr = tasksList.map((item) => {
      if (chId === item.id) {
        item.checked = e.target.checked;
        return item;
      }
      return item;
    });
    setTasksList(newArr);
  };

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
                autoFocus
              />
            ) : (
              <span onClick={() => handleEdit(name, id)} className="taskListItemText">
                {name}
              </span>
            )}
          </div>
          <div className="taskListItemHalf">
            <span className="taskListItemElem taskListItemDate">{date}</span>

            <button onClick={() => handleClick(id)} className="taskListItemElem taskListItemButton">
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskBar;
