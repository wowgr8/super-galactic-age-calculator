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

  mars() {
    return this.earthAge / 1.88;
  }

  jupiter() {
    return this.earthAge / 11.86;
  }
}