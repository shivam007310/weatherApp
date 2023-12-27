const searchBox = document.querySelector(".search input");
const SearchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "e03fcd96e2fd6e6432ac1d2c6dc605c4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  var response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  if (data.weather[0].main == "Clouds") {
    console.log("hi");
    weatherIcon.src = "/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/images/clear.png.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/images/rain.png.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/images/drizzle.png.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/images/mist.png";
  }
}

SearchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
