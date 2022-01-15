import { useState } from 'react';

const SearchBar = (props) => {
  const { setTasksList, tasksList } = props;

  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && taskName) {
      setTasksList([...tasksList, taskName]);
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
