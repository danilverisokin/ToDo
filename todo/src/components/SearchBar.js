import { useState } from 'react';

const SearchBar = (props) => {
  const { setTasksList, tasksList } = props;

  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
    console.log(taskName);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTasksList([...tasksList, taskName]);
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
        />
      </div>
    </div>
  );
};
export default SearchBar;
