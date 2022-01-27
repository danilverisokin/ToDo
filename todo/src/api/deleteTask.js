import axios from 'axios';

const deleteTaskApi = async (params) => {
  try {
    const { userId, id } = params;
    const res = await axios.delete(
      `https://todo-api-learning.herokuapp.com/v1/task/${userId}/${id}`
    );
    return res;
  } catch (err) {}
};

export default deleteTaskApi;
