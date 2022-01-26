import { Checkbox, Input, Button } from 'antd';

const TaskslistBar = () => {
  return (
    <div>
      <Checkbox></Checkbox>

      {/* {editTask?.id === id ? ( */}
      <Input />
      {/* ) : (
              <span onClick={() => handleEdit(name, id)} className="taskListItemText">
                {name}
              </span>
            )} */}
      <div>Date</div>
      <Button>X</Button>
    </div>
  );
};

export default TaskslistBar;
