export default class User {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercury() {
    return this.earthAge / .24;
  }
}