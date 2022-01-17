import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const SearchBar = (props) => {
  const { setTasksList, tasksList, setX } = props;
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && taskName) {
      const now = new Date();
      console.log(now);
      const date = now.getTime();
      // `Date: ${now.getDate()}.0${now.getMonth() + 1}.${now.getFullYear()}`;
      // ${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}

      setTasksList([...tasksList, { id: uuid(), name: taskName, checked: false, date: date }]);
      setX([...tasksList, { id: uuid(), name: taskName, checked: false, date: date }]);

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
export default SearchBar;
