import axios from 'axios';

const editTaskApi = async (params, body) => {
  try {
    const { userId, id } = params;
    await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/${userId}/${id}`, body);
  } catch (err) {
    alert(err);
  }
};

export default editTaskApi;
