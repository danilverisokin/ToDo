import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TaskInput = (props) => {
  const { setTasksList, tasksList, setSaveBox } = props;
  const [taskName, setTaskName] = useState('');

  // Функция отслеживающая изменения при вводе
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  // Функция создающаяя карточки
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && taskName) {
      setTasksList([
        ...tasksList,
        { id: uuid(), name: taskName, checked: false, date: new Date() },
      ]);
      setSaveBox([...tasksList, { id: uuid(), name: taskName, checked: false, date: new Date() }]);
      setTaskName('');
    }
  };

  return (
    <div className="search">
      <div className="searchTitle">ToDo</div>
      <div className="searchString">
        <input
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          type="text"
          placeholder="I want to..."
          value={taskName}
        />
      </div>
    </div>
  );
};
export default TaskInput;
