import { Input, Typography } from 'antd';

const { Title } = Typography;

const TaskInputBar = () => {
  return (
    <div>
      <Title>ToDo</Title>
      <Input placeholder="I want to..." />
    </div>
  );
};

export default TaskInputBar;
