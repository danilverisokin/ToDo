import { Checkbox, Input, Button } from 'antd';

const TaskslistBar = ({
  tasksList,
  handleCheckbox,
  handleKeyDown,
  handleChange,
  handleEdit,
  handleChangeData,
  handleClickDelete,
  editTask,
}) => {
  return (
    <div>
      {tasksList.map(({ name, id, checked, date }) => (
        <div key={id} className="taskCard">
          <div className="taskCardHalf">
            <Checkbox
              className="taskListCardElem"
              onChange={(e) => handleCheckbox(e, id, name)}
              checked={checked}
            ></Checkbox>

            {editTask?.id === id ? (
              <Input
                onKeyDown={handleKeyDown}
                value={editTask?.name}
                onChange={handleChange}
                onBlur={(e) => handleKeyDown(e, true)}
                autoFocus
              />
            ) : (
              <span className="taskListCardText" onClick={() => handleEdit(name, id)}>
                {name}
              </span>
            )}
          </div>
          <div className="taskCardHalf">
            <div className="taskListCardElem">{new Date(date).toLocaleString()}</div>
            <Button
              className="taskListCardElem taskListCardDelete"
              onClick={(e) => handleClickDelete(e, id)}
            >
              X
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskslistBar;
