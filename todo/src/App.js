import { useState, useEffect } from 'react';

import TaskInput from './components/TaskInput';
import Pagination from './components/Pagination';
import TasksList from './components/TasksList';
import DoneFilter from './components/DoneFilter';

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
    // }, [taskListsFiltered, page]);
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
        <DoneFilter
          saveBox={saveBox}
          setTaskListsFiltered={setTaskListsFiltered}
          taskListsFiltered={taskListsFiltered}
        />
      </div>

      <div className="container">
        <TasksList
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
