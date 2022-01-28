import { FILTER_VARIANTS, SORT_DATE_VARIANTS } from '../constants';
import { Radio } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const TaskFilterBar = ({ handlleSortByDate, handeFilter }) => {
  return (
    <div className="filterBar">
      <div className="filterButtons">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button
            value="a"
            onClick={() => handeFilter(FILTER_VARIANTS.FILTER_ALL)}
            // className={
            //   tasksFilter === FILTER_VARIANTS.FILTER_ALL ? 'buttonsMainItemPushed' : 'filterButton'
            // }
          >
            All
          </Radio.Button>
          <Radio.Button
            value="b"
            onClick={() => handeFilter(FILTER_VARIANTS.FILTER_DONE)}
            // className={
            //   tasksFilter === FILTER_VARIANTS.FILTER_DONE ? 'buttonsMainItemPushed' : 'filterButton'
            // }
          >
            Done
          </Radio.Button>
          <Radio.Button
            value="c"
            onClick={() => handeFilter(FILTER_VARIANTS.FILTER_UNDONE)}
            // className={
            //   tasksFilter === FILTER_VARIANTS.FILTER_UNDONE ? 'buttonsMainItemPushed' : 'filterButton'
            // }
          >
            Undone
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="sortByDateElem">
        <div className="sortByDateText">Sort by date</div>
        <Radio.Group defaultValue="b" buttonStyle="solid">
          <Radio.Button
            value="a"
            onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_ASC)}
            // className={
            //   sortByDate === SORT_DATE_VARIANTS.SORT_ASC
            //     ? 'buttonsSortArrowsItemPushed'
            //     : 'sortButton'
            // }
          >
            <CaretUpOutlined />
          </Radio.Button>
          <Radio.Button
            value="b"
            onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_DESC)}
            // className={
            //   sortByDate === SORT_DATE_VARIANTS.SORT_DESC
            //     ? 'buttonsSortArrowsItemPushed'
            //     : 'sortButton'
            // }
          >
            <CaretDownOutlined />
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default TaskFilterBar;
