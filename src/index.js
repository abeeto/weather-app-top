import "./styles.css";
import { getLocationSearch, weekWeatherByLocation } from "./weatherByLocation";
import LocationForecast from "./LocationForecast";
import WeatherDay from "./WeatherDay";

// const location = await searchForLocation();
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
const locationSearchSubmit = document.querySelector("#location-form-submit");
const searchStatusLabel = document.querySelector("#search-status");
locationSearchSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const location = getLocationSearch();
  createWeatherForecast(location)
    .then((newForecast) => {
      console.log(
        `Name: ${newForecast.locationName} \n Today: ${newForecast.currentDay.toString()} \n Next Week: \n${newForecast.next7days.map((day) => day.toString()).join("\n")}`,
      );
      searchStatusLabel.textContent = "FOUND!";
    })
    .catch((err) => {
      searchStatusLabel.textContent = err;
    });
  searchStatusLabel.textContent = "Searching...";
});

// eslint-disable-next-line no-console
