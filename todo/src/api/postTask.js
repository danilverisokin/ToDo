import axios from 'axios';

const postTaskApi = async (params, body) => {
  try {
    const { userId } = params;
    await axios.post(`https://todo-api-learning.herokuapp.com/v1/task/${userId}`, body);
  } catch (err) {}
};

export default postTaskApi;
