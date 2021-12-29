export default class lifeExpectancy {
  constructor(expectedAge, currentAge) {
    this.expectedAge = expectedAge;
    this.currentAge = currentAge;
  }

  mercuryExpectancy() {
    return (this.expectedAge - this.currentAge)/ .24;
  }
}