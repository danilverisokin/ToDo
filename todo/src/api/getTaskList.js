import axios from 'axios';
import { getPagesAmount } from '../utils';

const getTaskListAPI = async (params) => {
  try {
    const { userId, filterBy, order, page } = params;
    const { data } = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/${userId}`, {
      params: {
        filterBy,
        order,
        page,
      },
    });

    const tasks =
      data?.tasks.map((item) => {
        return {
          id: item.uuid,
          name: item.name,
          checked: item.done,
          date: new Date(item.createdAt),
        };
      }) || [];
    const count = getPagesAmount(data?.count);

    return { tasks, count, itemsCount: data?.count };
  } catch (err) {
    console.log(err);
  }
};

export default getTaskListAPI;
