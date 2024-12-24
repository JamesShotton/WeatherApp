// https://api.openweathermap.org/data/2.5/weather?q=London&appid=9c326ac0211a217cde5e8b4ca7addaab
const apiKey = "df2d382b8646f6f1af6c21a78a6517fd";
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
