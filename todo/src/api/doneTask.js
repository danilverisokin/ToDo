import axios from 'axios';

const doneTaskApi = async (params, body) => {
  try {
    const { userId, id } = params;
    const res = await axios.patch(
      `https://todo-api-learning.herokuapp.com/v1/task/${userId}/${id}`,
      body
    );
    return res;
  } catch (err) {
    alert(err);
  }
};

export default doneTaskApi;
