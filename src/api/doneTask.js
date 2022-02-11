import axios from 'axios';
import { PORT } from '../constants';

const doneTaskApi = async (params, body) => {
  try {
    const { userId, id } = params;
    const res = await axios.patch(`${PORT}/${id}`, body);
    return res;
  } catch (err) {
    alert(err);
  }
};

export default doneTaskApi;
