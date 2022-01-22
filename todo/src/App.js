import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import TaskInput from './components/TaskInput';
import Pagination from './components/Pagination';
import TasksList from './components/TasksList';
import Filter from './components/Filter';

function App(props) {
  const [tasksList, setTasksList] = useState([]);
  const [saveBox, setSaveBox] = useState([]);
  const [taskListsFiltered, setTaskListsFiltered] = useState([]);

  const [page, setPage] = useState(1);

  const [buttonActiveDone, setButtonActiveDone] = useState();
  const [buttonActiveAll, setButtonActiveAll] = useState(true);
  const [buttonActiveUndone, setButtonActiveUndone] = useState();

  const [buttonSortUpActive, setButtonSortUpActive] = useState();
  const [buttonSortDownActive, setButtonSortDownActive] = useState();

  useEffect(() => {
    if (taskListsFiltered.length > 5) {
      const newArr = [...taskListsFiltered].splice((page - 1) * 5, 5);
      setTasksList(newArr);
      return;
    }

    setTasksList(taskListsFiltered);
    // return () => console.log('unmount');
    // }, [taskListsFiltered, page]);
  }, [taskListsFiltered, page]);

  // TASKINPUT
  const [taskName, setTaskName] = useState('');

  // Функция отслеживающая изменения при вводе
  const handleChangeInput = (e) => {
    if (e.target.value === ' ') {
      return null;
    }
    setTaskName(e.target.value);
  };
  // Функция создающаяя массив с карточками
  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter' && taskName) {
      const id = uuid();
      setTaskListsFiltered([
        { id: id, name: taskName, checked: false, date: new Date() },
        ...taskListsFiltered,
      ]);
      setSaveBox([{ id: id, name: taskName, checked: false, date: new Date() }, ...saveBox]);
      setTaskName('');
    }
  };
  // FILTER
  const [newCardName, setNewCardName] = useState();
  const [editCardId, setEditCardId] = useState();
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
    setPage(1);
  };
  // Выводит только не отмеченные задачи
  const handleUndoneClick = () => {
    setTaskListsFiltered(saveBox.filter((item) => item.checked === false));
    setButtonActiveDone(false);
    setButtonActiveAll(false);
    setButtonActiveUndone(true);
    setPage(1);
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
  // TASKLIST
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
    if (e.target.value === '') {
      return null;
    }
    setNewCardName(e.target.value);
  };
  // Функция срабатывающая по нажитии ENTER, сохраняяет измененое имя в оба массива
  const handleKeyDown = (e, blur) => {
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
      setButtonActiveDone(false);
      setButtonActiveAll(true);
      setButtonActiveUndone(false);
    }
    if (e.key === 'Escape' || blur) {
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
    setButtonActiveDone(false);
    setButtonActiveAll(true);
    setButtonActiveUndone(false);
  };

  // PAGINATION
  const getPagesAmount = (items) => {
    const pagesAmount = Math.ceil(items.length / 5);

    const pages = new Array(pagesAmount).fill('').map((_, idx) => idx + 1);

    return pages;
  };

  const handleChangePage = (item) => {
    setPage(item);
  };
  const handleLastPage = () => {
    setPage(pages.length);
  };
  const handleFirstPage = () => {
    setPage(1);
  };

  const pages = getPagesAmount(taskListsFiltered);

  return (
    <div className="all_content">
      <div className="container">
        <TaskInput
          handleChangeInput={handleChangeInput}
          handleKeyDownInput={handleKeyDownInput}
          taskName={taskName}
        />
      </div>

      <div className="container">
        <Filter
          handleAllClick={handleAllClick}
          handleDoneClick={handleDoneClick}
          handleUndoneClick={handleUndoneClick}
          handleSortUp={handleSortUp}
          handleSortDown={handleSortDown}
          buttonActiveDone={buttonActiveDone}
          buttonActiveAll={buttonActiveAll}
          buttonActiveUndone={buttonActiveUndone}
          buttonSortUpActive={buttonSortUpActive}
          buttonSortDownActive={buttonSortDownActive}
        />
      </div>

      <div className="container">
        <TasksList
          tasksList={tasksList}
          handleCheckbox={handleCheckbox}
          handleEdit={handleEdit}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleChangeData={handleChangeData}
          handleClickDelete={handleClickDelete}
        />
      </div>

      {taskListsFiltered.length > 5 && (
        <div className="container">
          <Pagination
            page={page}
            pages={pages}
            handleChangePage={handleChangePage}
            handleLastPage={handleLastPage}
            handleFirstPage={handleFirstPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
