import axios from 'axios';

const deleteTaskApi = async (params) => {
  try {
    const { userId, id } = params;
    await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/${userId}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export default deleteTaskApi;
