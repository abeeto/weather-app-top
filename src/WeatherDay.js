export default class WeatherDay {
  #description;

  #conditions;

  #datetime;

  #temp;

  #feelslike;

  #icon;

  constructor({ description, conditions, datetime, temp, feelslike, icon }) {
    this.#description = description;
    this.#conditions = conditions;
    this.#datetime = new Date(datetime);
    this.#temp = temp;
    this.#feelslike = feelslike;
    this.#icon = icon;
  }

  get description() {
    return this.#description;
  }

  get conditions() {
    return this.#conditions;
  }

  get date() {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${dayNames[this.#datetime.getDay()]}, ${monthNames[this.#datetime.getMonth()]} ${this.#datetime.getDate()}`;
  }

  get temp() {
    return this.#temp;
  }

  get feelslike() {
    return this.#feelslike;
  }

  get icon() {
    return this.#icon;
  }

  toString() {
    return `${this.description}, ${this.conditions},  ${this.date}, ${this.temp}°C, ${this.feelslike}°C, ${this.icon}`;
  }
}
