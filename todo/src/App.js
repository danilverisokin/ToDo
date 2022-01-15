import { useState } from 'react';

import SearchBar from './components/SearchBar';
import ButtonBar from './components/ButtonBar';
import TaskBar from './components/TaskBar';
import NavBar from './components/NavBar';

function App(props) {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="all_content">
      <div className="container">
        <SearchBar setTasksList={setTasksList} tasksList={tasksList} />
      </div>

      <div className="container">
        <ButtonBar />
      </div>

      <div className="container">
        <TaskBar setTasksList={setTasksList} tasksList={tasksList} />
      </div>

      <div className="container">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
