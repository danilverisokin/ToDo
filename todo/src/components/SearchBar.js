import { useState } from 'react';

const SearchBar = (props) => {
  console.log(props);
  const { setTasksList, tasksList } = props;

  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
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
