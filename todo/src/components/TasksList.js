import { useState } from 'react';

const TasksList = (props) => {
  const { tasksList, saveBox, setSaveBox, setTaskListsFiltered } = props;
  const [newCardName, setNewCardName] = useState();
  const [editCardId, setEditCardId] = useState();

  // Функция для изменения состояния чекбокса в объекте-карточке
  const handleCheckbox = (e, chId) => {
    const newArr = saveBox.map((item) => {
      if (chId === item.id) {
        item.checked = e.target.checked;
        return item;
      }
      return item;
    });

    setSaveBox(newArr);
    setTaskListsFiltered(newArr);
  };
  // Функция описывающая начало редактирования
  const handleEdit = (name, id) => {
    setEditCardId(id);
    setNewCardName(name);
  };
  // Функция записывающая новое имя карточки при редактированиии
  const handleChange = (e) => {
    setNewCardName(e.target.value);
  };
  // Функция срабатывающая по нажитии ENTER, сохраняяет измененое имя в оба массива
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newArr = saveBox.map((item) => {
        if (item.id === editCardId) {
          return {
            ...item,
            name: newCardName,
          };
        }
        return item;
      });
      setSaveBox(newArr);
      setTaskListsFiltered(newArr);
      setEditCardId(null);
    }
    if (e.key === 'Escape') {
      setEditCardId(null);
    }
  };
  // Функция вносящаяя измения даты в карточку, дял двух массивов
  const handleChangeData = (e, chId) => {
    const newArr = saveBox.map((item) => {
      if (chId === item.id) {
        item.date = new Date(e.target.value);
        return item;
      }
      return item;
    });
    setTaskListsFiltered(newArr);
    setSaveBox(newArr);
  };
  // Функция удаляющщая карточку
  const handleClickDelete = (actId) => {
    const filteredNewArr = saveBox.filter(({ id }) => id !== actId);
    setTaskListsFiltered(filteredNewArr);
    setSaveBox(filteredNewArr);
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
