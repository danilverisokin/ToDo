import axios from 'axios';
import { PORT } from '../constants';

const deleteTaskApi = async (params) => {
  try {
    const { userId, id } = params;
    const res = await axios.delete(`${PORT}${userId}/${id}`);
    console.log(res);
    return res;
  } catch (err) {}
};

export default deleteTaskApi;
