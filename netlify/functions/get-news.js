const axios = require('axios');

const NEWS_KEY = process.env.NEWS_KEY;

exports.handler = async (event) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&pagesize=2&apiKey=${NEWS_KEY}`
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
