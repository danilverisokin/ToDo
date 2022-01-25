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
  const [saveBox, setSaveBox] = useState([]);
  const [taskListsFiltered, setTaskListsFiltered] = useState([]);

  // Add task
  const [newTaskName, setNewTaskName] = useState('');

  //Edit card
  const [editTask, setEditTask] = useState(null);

  const [tasksFilter, setTasksFilter] = useState(FILTER_VARIANTS.FILTER_ALL);
  const [sortByDate, setSortByDate] = useState(SORT_DATE_VARIANTS.SORT_DESC);

  const [page, setPage] = useState(1);

  // API
  const [taskListApi, setTaskListApi] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  console.log(taskListApi);

  const getTaskList = async (params) => {
    const { tasks, count, itemsCount } = await getTaskListAPI(params);
    setTaskListApi(tasks);
    setTasksList(tasks);
    setPageCount(count);
    setItemsCount(itemsCount);
  };

  const postTask = async (params, body) => {
    await postTaskApi(params, body);
    await getTaskList(params);
    // setPostTaskList(result);
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
      done: e.target.checked,
      createAt: new Date(),
    };
    checkTask(params, body);

    // const newArr = saveBox.map((item) => {
    //   if (chId === item.id) {
    //     item.checked = e.target.checked;
    //     return item;
    //   }
    //   return item;
    // });

    // setSaveBox(newArr);
    // setTaskListsFiltered(newArr);
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
    // if (e.key === 'Enter') {
    //   const newArr = saveBox.map((item) => {
    //     if (item.id === editTask.id) {
    //       return {
    //         ...item,
    //         name: editTask.name,
    //       };
    //     }
    //     return item;
    //   });
    //   setSaveBox(newArr);
    //   setTaskListsFiltered(newArr);
    //   setEditTask(null);
    //   setTasksFilter(FILTER_VARIANTS.FILTER_ALL);
    // }
    // if (e.key === 'Escape' || blur) {
    //   setEditTask(null);
    // }
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
          handleChangeData={handleChangeData}
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
