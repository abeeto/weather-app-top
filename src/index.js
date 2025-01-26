import "./styles.css";
import { askForLocation, weekWeatherByLocation } from "./weatherByLocation";
import LocationForecast from "./LocationForecast";
import WeatherDay from "./WeatherDay";

const location = await askForLocation();
const weatherResp = await weekWeatherByLocation(location);
const newForecast = new LocationForecast({
  resolvedAddress: weatherResp.resolvedAddress,
  currentDay: new WeatherDay(weatherResp.days[0]),
  next7days: weatherResp.days.slice(1),
});
// eslint-disable-next-line no-console
console.log(
  `Name: ${newForecast.locationName} \n Today: ${newForecast.currentDay.date} \n Next Week: ${newForecast.next7days}`,
);
