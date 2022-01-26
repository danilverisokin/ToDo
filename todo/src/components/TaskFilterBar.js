import { FILTER_VARIANTS, SORT_DATE_VARIANTS } from '../constants';
import { Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const TaskFilterBar = ({ handlleSortByDate, handeFilter }) => {
  return (
    <div className="filterBar">
      <div className="filterButtons">
        <Button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_ALL)}
          // className={
          //   tasksFilter === FILTER_VARIANTS.FILTER_ALL ? 'buttonsMainItemPushed' : 'filterButton'
          // }
        >
          All
        </Button>
        <Button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_DONE)}
          // className={
          //   tasksFilter === FILTER_VARIANTS.FILTER_DONE ? 'buttonsMainItemPushed' : 'filterButton'
          // }
        >
          Done
        </Button>
        <Button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_UNDONE)}
          // className={
          //   tasksFilter === FILTER_VARIANTS.FILTER_UNDONE ? 'buttonsMainItemPushed' : 'filterButton'
          // }
        >
          Undone
        </Button>
      </div>
      <div className="sortByDateElem">
        <div className="sortByDateText">Sort by date</div>
        <Button
          onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_ASC)}
          // className={
          //   sortByDate === SORT_DATE_VARIANTS.SORT_ASC
          //     ? 'buttonsSortArrowsItemPushed'
          //     : 'sortButton'
          // }
        >
          <CaretUpOutlined />
        </Button>
        <Button
          onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_DESC)}
          // className={
          //   sortByDate === SORT_DATE_VARIANTS.SORT_DESC
          //     ? 'buttonsSortArrowsItemPushed'
          //     : 'sortButton'
          // }
        >
          <CaretDownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default TaskFilterBar;
