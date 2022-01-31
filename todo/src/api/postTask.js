import axios from 'axios';
import { message } from 'antd';
import { PORT } from '../constants';

const postTaskApi = async (params, body) => {
  try {
    const { userId } = params;
    await axios.post(`${PORT}${userId}`, body);
  } catch (err) {
    message.error('Error', 2);
  }
};

export default postTaskApi;
