require('dotenv').config();

const apiKey = process.env.API_KEY;
const city = "London";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.weather);
  })
  .catch((error) => {
    console.log(`Error fetching weather data: ${error}`);
  });
