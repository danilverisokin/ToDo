import { useState } from 'react';

import TaskInput from './components/TaskInput';
import FilterButtons from './components/FilterButtons';
import ListSlider from './components/ListSlider';
import TaskList from './components/TaskList';

function App(props) {
  const [tasksList, setTasksList] = useState([]);
  const [saveBox, setSaveBox] = useState(tasksList);
  const [editCardId, setEditCardId] = useState();

  // useEffect(() => {
  //   if (saveBox.length >= 5) {
  //     setTaskListStorage([...taskListStorage, saveBox]);
  //     console.log(taskListStorage);
  //     setSaveBox([]);
  //     setTasksList([]);
  //   }
  // return () => console.log('unmount');
  // }, [saveBox]);

  return (
    <div className="all_content">
      <div className="container">
        <TaskInput setTasksList={setTasksList} tasksList={tasksList} setSaveBox={setSaveBox} />
      </div>

      <div className="container">
        <FilterButtons tasksList={tasksList} setTasksList={setTasksList} saveBox={saveBox} />
      </div>

      <div className="container">
        <TaskList
          saveBox={saveBox}
          setSaveBox={setSaveBox}
          setTasksList={setTasksList}
          tasksList={tasksList}
          editCardId={editCardId}
          setEditCardId={setEditCardId}
        />
      </div>

      <div className="container">
        <ListSlider setSaveBox={setSaveBox} setTasksList={setTasksList} />
      </div>
    </div>
  );
}

export default App;
