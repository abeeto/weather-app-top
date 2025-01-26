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

function populateTodayDisplay(forecast) {
  const weatherDay = forecast.currentDay;
  const newTodayDisplay = document.querySelector(".today-weather-wrapper");
  newTodayDisplay.innerHTML = `  
  <div class="weather-date">${weatherDay.date}</div>
  <div class="city-name">${forecast.locationName}</div>
  <div class="weather-desc">${weatherDay.description}</div>
  <div class="weather-info-wrapper">
    <div class="weather-icon">${weatherDay.icon}</div>
    <div class="temp-wrapper">
        <div class="actual-temp">${weatherDay.temp}</div>
        <div class="feelslike-temp">${weatherDay.feelslike}</div>
    </div>
  </div>
</div>`;
}

function populateWeeklyDisplay(weekDays) {
  const singleDaysWrappers = document.querySelectorAll(".single-day");
  singleDaysWrappers.forEach((singleDayWrapper, index) => {
    const weatherDay = weekDays[index];
    // eslint-disable-next-line no-param-reassign
    singleDayWrapper.innerHTML = `  
  <div class="weather-date">${weatherDay.date}</div>
  <div class="weather-desc">${weatherDay.conditions}</div>
  <div class="weather-info-wrapper">
    <div class="weather-icon">${weatherDay.icon}</div>
    <div class="temp-wrapper">
        <div class="actual-temp">${weatherDay.temp}</div>
        <div class="feelslike-temp">${weatherDay.feelslike}</div>
    </div>
  </div>
</div>`;
  });
}

const locationSearchSubmit = document.querySelector("#location-form-submit");
const searchStatusLabel = document.querySelector("#search-status");
locationSearchSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const location = getLocationSearch();
  createWeatherForecast(location)
    .then((newForecast) => {
      searchStatusLabel.textContent = "";
      populateTodayDisplay(newForecast);
      populateWeeklyDisplay(newForecast.next7days);
      return newForecast;
    })
    .catch((err) => {
      searchStatusLabel.textContent = err;
    });
  searchStatusLabel.textContent = "Searching...";
});
