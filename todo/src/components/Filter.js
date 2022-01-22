import { FILTER_VARIANTS, SORT_DATE_VARIANTS } from '../constants';

const Filter = (props) => {
  const { handlleSortByDate, tasksFilter, handeFilter, sortByDate } = props;

  return (
    <div className="buttons">
      <div className="buttonsMain">
        <button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_ALL)}
          className={
            tasksFilter === FILTER_VARIANTS.FILTER_ALL ? 'buttonsMainItemPushed' : 'buttonsMainItem'
          }
        >
          All
        </button>
        <button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_DONE)}
          className={
            tasksFilter === FILTER_VARIANTS.FILTER_DONE
              ? 'buttonsMainItemPushed'
              : 'buttonsMainItem'
          }
        >
          Done
        </button>
        <button
          onClick={() => handeFilter(FILTER_VARIANTS.FILTER_UNDONE)}
          className={
            tasksFilter === FILTER_VARIANTS.FILTER_UNDONE
              ? 'buttonsMainItemPushed'
              : 'buttonsMainItem'
          }
        >
          Undone
        </button>
      </div>

      <div className="buttonsSort">
        <div className="buttonsSortText">Sort by date</div>

        <div className="buttonsSortArrows">
          <button
            onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_ASC)}
            className={
              sortByDate === SORT_DATE_VARIANTS.SORT_ASC
                ? 'buttonsSortArrowsItemPushed'
                : 'buttonsSortArrowsItem'
            }
          >
            /\
          </button>
          <button
            onClick={() => handlleSortByDate(SORT_DATE_VARIANTS.SORT_DESC)}
            className={
              sortByDate === SORT_DATE_VARIANTS.SORT_DESC
                ? 'buttonsSortArrowsItemPushed'
                : 'buttonsSortArrowsItem'
            }
          >
            \/
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
