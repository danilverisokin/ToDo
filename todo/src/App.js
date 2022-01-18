import { useState } from 'react';

import SearchBar from './components/SearchBar';
import ButtonBar from './components/ButtonBar';
import TaskBar from './components/TaskBar';
import NavBar from './components/NavBar';

function App(props) {
  const [tasksList, setTasksList] = useState([]);
  const [editCardId, setEditCardId] = useState();
  const [saveBox, setSaveBox] = useState(tasksList);

  // useEffect(() => {
  //   console.log('mount');
  //   // return () => console.log('unmount');
  // }, [kek]);

  return (
    <div className="all_content">
      <div className="container">
        <SearchBar setTasksList={setTasksList} tasksList={tasksList} setSaveBox={setSaveBox} />
      </div>

      <div className="container">
        <ButtonBar setTasksList={setTasksList} tasksList={tasksList} saveBox={saveBox} />
      </div>

      <div className="container">
        <TaskBar
          saveBox={saveBox}
          setSaveBox={setSaveBox}
          setTasksList={setTasksList}
          tasksList={tasksList}
          editCardId={editCardId}
          setEditCardId={setEditCardId}
        />
      </div>

      <div className="container">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
