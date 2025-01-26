class LocationForecast {
  #locationName;

  #currentDay;

  #next7days;

  constructor({ resolvedAddress, currentDay, next7days }) {
    this.#locationName = resolvedAddress;
    this.#currentDay = currentDay;
    this.#next7days = next7days;
  }

  get currentDay() {
    return this.#currentDay;
  }

  get next7days() {
    return this.#next7days;
  }

  get locationName() {
    return this.#locationName;
  }
}

export default LocationForecast;
