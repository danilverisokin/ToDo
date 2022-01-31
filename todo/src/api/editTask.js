import axios from 'axios';
import { PORT } from '../constants';

const editTaskApi = async (params, body) => {
  try {
    const { userId, id } = params;
    const res = await axios.patch(`${PORT}${userId}/${id}`, body);
    return res;
  } catch (err) {
    alert(err);
  }
};

export default editTaskApi;
