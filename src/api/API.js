import axios from 'axios';

export async function getApi(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
}
