import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TaskInput = (props) => {
  const { saveBox, setSaveBox, taskListsFiltered, setTaskListsFiltered } = props;
  const [taskName, setTaskName] = useState('');

  // Функция отслеживающая изменения при вводе
  const handleChange = (e) => {
    if (e.target.value === ' ') {
      return null;
    }
    setTaskName(e.target.value);
  };
  // Функция создающаяя массив с карточками
  const handleKeyDown = (e) => {
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
