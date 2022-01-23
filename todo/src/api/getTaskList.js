import axios from 'axios';

const getTaskListAPI = async (params) => {
  try {
    const { userId } = params;
    const { data } = await axios.get(`https://todo-api-learning.herokuapp.com/v1/tasks/${userId}?`);
    console.log(data);
    return data;
    // await axios.get(`${process.env.NEXT_PUBLIC_API}/search`, {
    //   params: {
    //     q: searchTerm,
    //     lang,
    //   },
    // }
  } catch (err) {
    console.log(err);
  }
};

export default getTaskListAPI;
