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
    expect(user0.venusExpectancy()).toEqual(96.7741935483871)
  });

  test('Should return life expectancy in Mars years', () => {
    const user0 = new lifeExpectancy(88,28);
    expect(user0.marsExpectancy()).toEqual(31.914893617021278)
  });

  test('Should return life expectancy in Jupiter years', () => {
    const user0 = new lifeExpectancy(88,28);
    expect(user0.jupiterExpectancy()).toEqual(5.059021922428331)
  });

  test('Should return the number of years the user has lived past the life expectancy in Mercury years', () => {
    const user0 = new lifeExpectancy(88,98);
    expect(user0.mercuryExpectancy()).toEqual(41.6666666667);
  });

  test('Should return the number of years the user has lived past the life expectancy in Venus years', () => {
    const user0 = new lifeExpectancy(88,98);
    expect(user0.venusExpectancy()).toEqual(16.1290322581);
  });
});