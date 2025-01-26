import "./styles.css";
import { askForLocation, todayWeatherByLocation } from "./weatherByLocation";

askForLocation()
  .then((location) => todayWeatherByLocation(location))
  // eslint-disable-next-line no-console
  .then((weatherResp) => console.log(weatherResp));
