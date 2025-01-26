import "./styles.css";
import { getLocationSearch, weekWeatherByLocation } from "./weatherByLocation";
import LocationForecast from "./LocationForecast";
import WeatherDay from "./WeatherDay";

async function createWeatherForecast(location) {
  const weatherResp = await weekWeatherByLocation(location);
  const newForecast = new LocationForecast({
    resolvedAddress: weatherResp.resolvedAddress,
    currentDay: new WeatherDay(weatherResp.days[0]),
    next7days: weatherResp.days
      .slice(1)
      .map((dayJSON) => new WeatherDay(dayJSON)),
  });
  return newForecast;
}

function createTodayDisplay(forecast) {
  const weatherDay = forecast.currentDay;
  const newTodayDisplay = document.createElement("div");
  newTodayDisplay.className = "today-weather-wrapper";
  newTodayDisplay.innerHTML = `  
  <div class="city-name">${forecast.locationName}</div>
  <div class="weather-desc">${weatherDay.description}</div>
  <div class="weather-date">${weatherDay.date}</div>
  <div class="weather-icon">${weatherDay.icon} 
  </div>
  <div class="temp-wrapper">
      <div class="actual-temp">${weatherDay.temp}</div>
      <div class="feelslike-temp">${weatherDay.feelslike}</div>
  </div>
</div>`;
  document.querySelector("body").appendChild(newTodayDisplay);
}

const locationSearchSubmit = document.querySelector("#location-form-submit");
const searchStatusLabel = document.querySelector("#search-status");
locationSearchSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const location = getLocationSearch();
  createWeatherForecast(location)
    .then((newForecast) => {
      searchStatusLabel.textContent = "FOUND!";
      createTodayDisplay(newForecast);
      return newForecast;
    })
    .catch((err) => {
      searchStatusLabel.textContent = err;
    });
  searchStatusLabel.textContent = "Searching...";
});
