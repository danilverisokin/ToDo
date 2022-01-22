const TaskInput = (props) => {
  const { handleChangeInput, handleKeyDownInput, taskName } = props;

  return (
    <div className="search">
      <div className="searchTitle">ToDo</div>
      <div className="searchString">
        <input
          onKeyDown={handleKeyDownInput}
          onChange={handleChangeInput}
          type="text"
          placeholder="I want to..."
          value={taskName}
        />
      </div>
    </div>
  );
};
export default TaskInput;
