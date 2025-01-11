const apiKey = "df2d382b8646f6f1af6c21a78a6517fd";
const input = document.getElementById("input");
const button = document.getElementById("button");

async function checkWeather() {
  const city = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const container = document.querySelector(".container-cards");

    if (!container) {
      console.error("Container element not found");
      return;
    }

    const card = document.createElement("div");

    card.className = "card";
    if (data.clouds.all >= 70) {
      card.classList.add("rain");
    }
    if ((data.clouds.all >= 30) & (data.clouds.all <= 70)) {
      card.classList.add("cloud");
    }
    if (data.clouds.all <= 30) {
      card.classList.add("sun");
    }

    card.innerHTML = `
    <div id="card" class="card">
      <div class="photo">
        
      </div>

      <div class="temp">
        <h1>${Math.floor(data.main.temp)}°c</h1>
        <h2>${data.name}</h2>
      </div>

      <div class="extra">
        <div class="humidity">
          <i class="fa-solid fa-water"></i>
          <div class="stats">
            <h4>${data.main.humidity}%</h4>
            <p>Humidity</p>
          </div>
        </div>
        <div class="humidity">
          <i class="fa-solid fa-wind"></i>
          <div class="stats">
            <h4>${data.wind.speed}km/h</h4>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>`;

    container.appendChild(card);

    const image = card.querySelector(".photo");
    if (data.clouds.all > 70 || data.weather[0].main === "Rain") {
      image.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    } else if ((data.clouds.all > 50) & (data.clouds.all <= 70)) {
      image.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    } else if ((data.clouds.all > 30) & (data.clouds.all <= 50)) {
      image.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    } else if (data.clouds.all <= 30) {
      image.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    setTimeout(() => {
      card.classList.add("show");
    }, 250);
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", checkWeather);
