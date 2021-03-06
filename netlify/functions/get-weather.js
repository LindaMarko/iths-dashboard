const axios = require('axios');

const WEATHER_KEY = process.env.WEATHER_KEY;

exports.handler = async (event) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&appid=${WEATHER_KEY}`
    );
    console.log(response);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};
