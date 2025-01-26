import "./styles.css";
import { askForLocation, weekWeatherByLocation } from "./weatherByLocation";
import LocationForecast from "./LocationForecast";

const location = await askForLocation();
const weatherResp = await weekWeatherByLocation(location);
const newForecast = new LocationForecast({
  resolvedAddress: weatherResp.resolvedAddress,
  currentDay: weatherResp.days[0],
  next7days: weatherResp.days.slice(1),
});
// eslint-disable-next-line no-console
console.log(
  `Name: ${newForecast.locationName} \n Today: ${JSON.stringify(newForecast.currentDay)} \n Next Week: ${JSON.stringify(newForecast.next7days)}`,
);
