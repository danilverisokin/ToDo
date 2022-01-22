const TaskInput = (props) => {
  const { handleChangeInput, handleKeyDownInput, newTaskName } = props;

  return (
    <div className="search">
      <div className="searchTitle">ToDo</div>
      <div className="searchString">
        <input
          onKeyDown={handleKeyDownInput}
          onChange={handleChangeInput}
          type="text"
          placeholder="I want to..."
          value={newTaskName}
        />
      </div>
    </div>
  );
};
export default TaskInput;
