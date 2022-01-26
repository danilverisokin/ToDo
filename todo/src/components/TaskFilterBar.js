import { Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const TaskFilterBar = () => {
  return (
    <div>
      <div>
        <Button>All</Button>
        <Button>Done</Button>
        <Button>Undone</Button>
      </div>
      <div>
        <div>Sort by date</div>
        <Button>
          <CaretUpOutlined />
        </Button>
        <Button>
          <CaretDownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default TaskFilterBar;
