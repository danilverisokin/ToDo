import { useState, useEffect } from 'react';

import TaskInput from './components/TaskInput';
import Pagination from './components/Pagination';
import TasksList from './components/TasksList';
import Filter from './components/Filter';

import { FILTER_VARIANTS } from './constants';
import { SORT_DATE_VARIANTS } from './constants';

import getTaskListAPI from './api/getTaskList';
import postTaskApi from './api/postTask';
import deleteTaskApi from './api/deleteTask';
import doneTaskApi from './api/doneTask';
import editTaskApi from './api/editTask';

function App(props) {
  const [tasksList, setTasksList] = useState([]);

  // Add task
  const [newTaskName, setNewTaskName] = useState('');

  //Edit card
  const [editTask, setEditTask] = useState(null);

  const [tasksFilter, setTasksFilter] = useState(FILTER_VARIANTS.FILTER_ALL);
  const [sortByDate, setSortByDate] = useState(SORT_DATE_VARIANTS.SORT_DESC);

  const [page, setPage] = useState(1);

  // API
  const [pageCount, setPageCount] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const getTaskList = async (params) => {
    const { tasks, count, itemsCount } = await getTaskListAPI(params);
    setTasksList(tasks);
    setPageCount(count);
    setItemsCount(itemsCount);
  };

  const postTask = async (params, body) => {
    await postTaskApi(params, body);
    await getTaskList(params);
  };

  const deleteTask = async (params) => {
    await deleteTaskApi(params);
    await getTaskList(params);
  };
  const checkTask = async (params, body) => {
    await doneTaskApi(params, body);
    await getTaskList(params);
  };
  const editTaskFunc = async (params, body) => {
    await editTaskApi(params, body);
    await getTaskList(params);
  };

  useEffect(() => {
    const params = {
      userId: 4,
      filterBy: tasksFilter,
      order: sortByDate,
      page: page,
    };
    getTaskList(params);
  }, [tasksFilter, sortByDate, page]);

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
      setNewTaskName('');
      const initialState = {
        filterBy: FILTER_VARIANTS.FILTER_ALL,
        order: SORT_DATE_VARIANTS.SORT_DESC,
        page: 1,
      };
      setTasksFilter(initialState.filterBy);
      setSortByDate(initialState.order);
      setPage(initialState.page);
      const params = {
        userId: 4,
        filterBy: initialState.filterBy,
        order: initialState.order,
        page: initialState.page,
      };
      const body = {
        name: newTaskName,
        done: false,
        createdAt: new Date(),
      };
      postTask(params, body);
    }
  };

  // FILTER
  // Функция фильтрует массив заданий
  const handeFilter = (variant) => {
    switch (variant) {
      case FILTER_VARIANTS.FILTER_DONE:
        setTasksFilter(FILTER_VARIANTS.FILTER_DONE);
        break;
      case FILTER_VARIANTS.FILTER_UNDONE:
        setTasksFilter(FILTER_VARIANTS.FILTER_UNDONE);
        break;
      default:
        setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
        break;
    }
  };

  const handlleSortByDate = (variants) => {
    switch (variants) {
      case SORT_DATE_VARIANTS.SORT_ASC:
        setSortByDate(SORT_DATE_VARIANTS.SORT_ASC);
        break;
      default:
        setSortByDate(SORT_DATE_VARIANTS.SORT_DESC);
        break;
    }
  };

  // TASKLIST
  // Функция для изменения состояния чекбокса в объекте-карточке
  const handleCheckbox = (e, chId, name) => {
    const initialState = {
      filterBy: FILTER_VARIANTS.FILTER_ALL,
      order: SORT_DATE_VARIANTS.SORT_DESC,
      page: 1,
    };
    const params = {
      userId: 4,
      id: chId,
      filterBy: initialState.filterBy,
      order: initialState.order,
      page: initialState.page,
    };
    const body = {
      name: name,
      done: e.target.checked,
      createAt: new Date(),
    };
    checkTask(params, body);
  };

  // Функция описывающая начало редактирования
  const handleEdit = (name, id) => {
    setEditTask({
      name,
      id,
    });
  };

  // Функция записывающая новое имя карточки при редактированиии
  const handleChange = (e) => {
    setEditTask({ ...editTask, name: e.target.value });
  };

  // Функция срабатывающая по нажитии ENTER, сохраняяет измененое имя в оба массива
  const handleKeyDown = (e, blur) => {
    if (e.key === 'Enter') {
      const initialState = {
        filterBy: FILTER_VARIANTS.FILTER_ALL,
        order: SORT_DATE_VARIANTS.SORT_DESC,
        page: 1,
      };
      const params = {
        userId: 4,
        id: editTask.id,
        filterBy: initialState.filterBy,
        order: initialState.order,
        page: initialState.page,
      };
      const body = {
        name: editTask.name,
      };
      editTaskFunc(params, body);
      setEditTask(null);
    }
    if (e.key === 'Escape' || blur) {
      setEditTask(null);
    }
  };

  // Функция удаляющая карточку
  const handleClickDelete = (actId) => {
    const initialState = {
      filterBy: FILTER_VARIANTS.FILTER_ALL,
      order: SORT_DATE_VARIANTS.SORT_DESC,
      page: 1,
    };
    const params = {
      userId: 4,
      id: actId,
      filterBy: initialState.filterBy,
      order: initialState.order,
      page: initialState.page,
    };
    deleteTask(params);
    setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
  };

  // PAGINATION
  const handleChangePage = (item) => {
    setPage(item);
  };

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
          handleClickDelete={handleClickDelete}
          editTask={editTask}
        />
      </div>

      {itemsCount > 5 && (
        <div className="container">
          <Pagination page={page} pages={pageCount} handleChangePage={handleChangePage} />
        </div>
      )}
    </div>
  );
}

export default App;
