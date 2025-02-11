function weekWeatherByLocation(location) {
  const weather = fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&include=days&key=PASBFSBRA5EJCPXZ6VTEC7FNB&contentType=json`,
    { mode: "cors" },
  ).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    if (resp.status === 400) {
      throw new Error("400: Bad User Request. No such location found");
    } else {
      throw new Error(resp.status);
    }
  });
  return weather;
}

function getLocationSearch() {
  // eslint-disable-next-line no-alert
  const searchInput = document.querySelector("#location-search-field");
  const location = searchInput.value.toLowerCase();
  return location;
}

export { getLocationSearch, weekWeatherByLocation };
