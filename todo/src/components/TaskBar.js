import { useState } from 'react';

const TaskBar = (props) => {
  const { tasksList, setTasksList, editCardId, setEditCardId } = props;
  const [newCardName, setNewCardName] = useState();
  const [x, setX] = useState();

  const handleClick = (actId) => {
    const filteredNewArr = tasksList.filter(({ id }) => id !== actId);
    setTasksList(filteredNewArr);
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
      setTasksList(newArr);
      setEditCardId(null);
    }
    if (e.key === 'Escape') {
      setEditCardId(null);
    }
  };

  const handleCheckbox = (e, chId) => {
    setX(e.target.checked);
    console.log(x);

    const newArr = tasksList.map(({ id, checked }) => {
      if (chId === id) {
        checked = x;
        console.log(id);
        console.log(checked);
      }
    });
    // setTasksList(newArr);
    // console.log(tasksList);
  };

  return (
    <ul className="taskList">
      {tasksList.map(({ name, id }) => (
        <li key={id} className="taskListItem">
          <div className="taskListItemHalf">
            <input
              onChange={(e, id) => handleCheckbox(e, id)}
              // change={x}
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
            <input className="taskListItemElem taskListItemDate" type="date" />

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
