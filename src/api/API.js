import axios from 'axios';

export async function getWeather() {
  try {
    return await axios.get(`/.netlify/functions/get-weather`);
  } catch (error) {
    console.log(error);
  }
}

// export async function getNews(){
//   try{
//   return await axios.get( `https://api.github.com/users/anna-arlig/gists`)
//   }
//   catch(error){
//   console.log(error)
//   }
// }
