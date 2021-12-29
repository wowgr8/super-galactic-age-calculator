// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.

export default class lifeExpectancy {
  constructor(currentAge, expectedAge) {
    this.currentAge = currentAge;
    this.expectedAge = expectedAge;
  }
}