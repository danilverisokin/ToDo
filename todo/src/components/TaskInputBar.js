import { Input, Typography } from 'antd';

const { Title } = Typography;

const TaskInputBar = ({ handleChangeInput, handleKeyDownInput, newTaskName }) => {
  return (
    <div className="taskInput">
      <Title className="toDoTitle">ToDo</Title>
      <Input
        className="inputString"
        placeholder="I want to..."
        onKeyDown={handleKeyDownInput}
        onChange={handleChangeInput}
        value={newTaskName}
      />
    </div>
  );
};

export default TaskInputBar;
