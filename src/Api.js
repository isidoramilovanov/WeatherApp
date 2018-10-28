const API_KEY = "778bd51e7f624b579ae81515181310";

const getWeather = city => {
  return fetch(
    `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
  ).then(res => res.json());
};

export default getWeather;
