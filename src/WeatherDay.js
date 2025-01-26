export default class WeatherDay {
  #conditions;

  #datetime;

  //   #temp;

  //   #feelslike;

  //   #icon;

  //   temp, feelslike, icon
  constructor({ conditions, datetime }) {
    this.#conditions = conditions;
    this.#datetime = new Date(datetime);
    // this.#temp = temp;
    // this.#feelslike = feelslike;
    // this.#icon = icon;
  }

  get description() {
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
}
