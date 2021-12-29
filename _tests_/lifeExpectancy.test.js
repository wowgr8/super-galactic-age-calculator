import lifeExpectancy from '../src/js/lifeExpectancy.js';

describe('lifeExpectancy', () => {

  test('Should return how many years a user has left to live', () => {
    const user0 = new lifeExpectancy(88, 28);
    expect(user0.expectedAge - user0.currentAge).toEqual(60);
  });

  test('Should return life expectancy in Mercury years', () => {
    const user0 = new lifeExpectancy(88, 28);
    expect(user0.mercuryExpectancy()).toEqual(250);
  });

  test('Should return life expectancy in Venus years', () => {
    const user0 = new lifeExpectancy(88,28);
    expect(user0.venusExpectancy()).toEqual(142.3870967742)
  });
});