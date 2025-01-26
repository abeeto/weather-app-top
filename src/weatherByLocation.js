async function askForLocation() {
  // eslint-disable-next-line no-alert
  const location = await window.prompt("Enter a location:", "Hyderabad");
  return location.toLowerCase();
}

function weekWeatherByLocation(location) {
  const weather = fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&include=days&key=PASBFSBRA5EJCPXZ6VTEC7FNB&contentType=json`,
    { mode: "cors" },
  )
    .then((resp) => resp.json())
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
  return weather;
}

export { askForLocation, weekWeatherByLocation };
