import axios from 'axios';
import { message } from 'antd';
import { PORT } from '../constants';

const postTaskApi = async (params, body) => {
  try {
    const { userId } = params;
    await axios.post(`${PORT}`, body);
  } catch (err) {
    message.error('Такое имя уже существует', 2);
  }
};

export default postTaskApi;
