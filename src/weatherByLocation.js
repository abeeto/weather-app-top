async function askForLocation() {
  // eslint-disable-next-line no-alert
  const location = await window.prompt("Enter a location:", "Hyderabad");
  return location.toLowerCase();
}

function todayWeatherByLocation(location) {
  const weather = fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=days&key=PASBFSBRA5EJCPXZ6VTEC7FNB&contentType=json`,
    { mode: "cors" },
  )
    .then((resp) => resp.json())
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
  return weather;
}

export { askForLocation, todayWeatherByLocation };
