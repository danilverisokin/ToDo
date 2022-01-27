import axios from 'axios';
// import { getcurrentPagesAmount } from '../utils';

const getTaskListAPI = async (params) => {
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
        date: item.createdAt,
      };
    }) || [];

  return { tasks, itemsCount: data?.count };
};

export default getTaskListAPI;
