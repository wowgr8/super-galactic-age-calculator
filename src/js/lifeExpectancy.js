export default class lifeExpectancy {
  constructor(expectedAge, currentAge) {
    this.expectedAge = expectedAge;
    this.currentAge = currentAge;
  }

  mercuryExpectancy() {
    if (this.currentAge > this.expectedAge) {
      return (this.currentAge - this.expectedAge) /.24;
    } else {
      return (this.expectedAge - this.currentAge) / .24;
    }    
  }

  venusExpectancy() {
    if (this.currentAge > this.expectedAge) {
      return (this.currentAge - this.expectedAge) /.62;
    } else {
      return (this.expectedAge - this.currentAge) /.62;
    }
  } 

  marsExpectancy() {
    if (this.currentAge > this.expectedAge) {
      return (this.currentAge - this.expectedAge) / 1.88;
    } else {
      return (this.expectedAge - this.currentAge) / 1.88;
    }
  }

  jupiterExpectancy() {
    if (this.currentAge > this.expectedAge) {
      return (this.currentAge - this.expectedAge) / 11.86;
    } else {
      return (this.expectedAge - this.currentAge) / 11.86;
    }
  }
}