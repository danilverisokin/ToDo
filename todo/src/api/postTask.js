import axios from 'axios';
import { message } from 'antd';

const postTaskApi = async (params, body) => {
  try {
    const { userId } = params;
    await axios.post(`https://todo-api-learning.herokuapp.com/v1/task/${userId}`, body);
  } catch (err) {
    message.error('Error', 2);
  }
};

export default postTaskApi;
