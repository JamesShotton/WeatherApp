require("dotenv").config();

const apiKey = process.env.API_KEY;
const city = "London";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function checkWeather() {
  const response = await fetch(url);
  const data = await response.json();
}
