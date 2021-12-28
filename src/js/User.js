export default class User {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercury() {
    return this.earthAge / .24;
  }

  venus() {
    return this.earthAge / .62;
  }
}