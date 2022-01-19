import { useState, useEffect } from 'react';

import TaskInput from './components/TaskInput';
import FilterButtons from './components/FilterButtons';
import Pagination from './components/Pagination';
import TaskList from './components/TaskList';

function App(props) {
  const [tasksList, setTasksList] = useState([]);
  const [saveBox, setSaveBox] = useState([]);
  const [taskListsFiltered, setTaskListsFiltered] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (taskListsFiltered.length > 5) {
      const newArr = [...taskListsFiltered].splice((page - 1) * 5, 5);
      setTasksList(newArr);
      return;
    }

    setTasksList(taskListsFiltered);
    // return () => console.log('unmount');
  }, [taskListsFiltered, page]);

  return (
    <div className="all_content">
      <div className="container">
        <TaskInput
          setTaskListsFiltered={setTaskListsFiltered}
          saveBox={saveBox}
          setSaveBox={setSaveBox}
          taskListsFiltered={taskListsFiltered}
        />
      </div>

      <div className="container">
        <FilterButtons saveBox={saveBox} setTaskListsFiltered={setTaskListsFiltered} />
      </div>

      <div className="container">
        <TaskList
          setTaskListsFiltered={setTaskListsFiltered}
          saveBox={saveBox}
          setSaveBox={setSaveBox}
          tasksList={tasksList}
        />
      </div>

      {taskListsFiltered.length > 5 && (
        <div className="container">
          <Pagination taskListsFiltered={taskListsFiltered} setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default App;
