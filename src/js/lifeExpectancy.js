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
    return (this.expectedAge - this.currentAge)/ 11.86;
  }
}

//If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.