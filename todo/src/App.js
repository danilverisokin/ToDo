import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import TaskInput from './components/TaskInput';
import Pagination from './components/Pagination';
import TasksList from './components/TasksList';
import Filter from './components/Filter';

import { FILTER_VARIANTS } from './constants';
import { SORT_DATE_VARIANTS } from './constants';

function App(props) {
  const [tasksList, setTasksList] = useState([]);
  const [saveBox, setSaveBox] = useState([]);
  const [taskListsFiltered, setTaskListsFiltered] = useState([]);

  const [newTaskName, setNewTaskName] = useState('');

  const [tasksFilter, setTasksFilter] = useState(FILTER_VARIANTS.FILTER_ALL);
  const [sortByDate, setSortByDate] = useState(SORT_DATE_VARIANTS.SORT_DESC);

  const [page, setPage] = useState(1);

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

  // Функция отслеживающая изменения при вводе
  const handleChangeInput = (e) => {
    if (e.target.value === ' ') {
      return null;
    }
    setNewTaskName(e.target.value);
  };
  // Функция создающаяя массив с карточками
  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter' && newTaskName) {
      const id = uuid();
      setTaskListsFiltered([
        { id: id, name: newTaskName, checked: false, date: new Date() },
        ...taskListsFiltered,
      ]);
      setSaveBox([{ id: id, name: newTaskName, checked: false, date: new Date() }, ...saveBox]);
      setNewTaskName('');
    }
  };
  // FILTER
  const [newCardName, setNewCardName] = useState();
  const [editCardId, setEditCardId] = useState();
  // Функция выводит весь список
  const handeFilter = (variant) => {
    switch (variant) {
      case FILTER_VARIANTS.FILTER_DONE:
        setTaskListsFiltered(saveBox.filter((item) => item.checked === true));
        setTasksFilter(FILTER_VARIANTS.FILTER_DONE);
        break;
      case FILTER_VARIANTS.FILTER_UNDONE:
        setTaskListsFiltered(saveBox.filter((item) => item.checked === false));
        setTasksFilter(FILTER_VARIANTS.FILTER_UNDONE);
        break;
      default:
        setTaskListsFiltered(saveBox);
        setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
        break;
    }
    setPage(1);
  };

  const handlleSortByDate = (variants) => {
    switch (variants) {
      case SORT_DATE_VARIANTS.SORT_ASC:
        const newArrAsc = [...taskListsFiltered].sort((a, b) => {
          if (a.date.getTime() < b.date.getTime()) return 1;
          if (a.date.getTime() > b.date.getTime()) return -1;
          return 0;
        });
        setTaskListsFiltered(newArrAsc);
        setSortByDate(SORT_DATE_VARIANTS.SORT_ASC);
        break;
      default:
        const newArrDesc = [...taskListsFiltered].sort((a, b) => {
          if (a.date.getTime() > b.date.getTime()) return 1;
          if (a.date.getTime() < b.date.getTime()) return -1;
          return 0;
        });
        setTaskListsFiltered(newArrDesc);
        setSortByDate(SORT_DATE_VARIANTS.SORT_DESC);

        break;
    }
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
      setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
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
  // Функция удаляющая карточку
  const handleClickDelete = (actId) => {
    const filteredNewArr = saveBox.filter(({ id }) => id !== actId);
    setTaskListsFiltered(filteredNewArr);
    setSaveBox(filteredNewArr);
    setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
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

  const pages = getPagesAmount(taskListsFiltered);

  return (
    <div className="all_content">
      <div className="container">
        <TaskInput
          handleChangeInput={handleChangeInput}
          handleKeyDownInput={handleKeyDownInput}
          newTaskName={newTaskName}
        />
      </div>

      <div className="container">
        <Filter
          sortByDate={sortByDate}
          tasksFilter={tasksFilter}
          handeFilter={handeFilter}
          handlleSortByDate={handlleSortByDate}
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
          <Pagination page={page} pages={pages} handleChangePage={handleChangePage} />
        </div>
      )}
    </div>
  );
}

export default App;
