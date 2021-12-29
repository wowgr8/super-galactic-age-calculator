import lifeExpectancy from '../src/js/lifeExpectancy.js';

describe('lifeExpectancy', () => {

  test('Should return how many years a user has left to live', () => {
    const user0 = new lifeExpectancy(28, 88);
    expect(user0.expectedAge - user0.currentAge).toEqual(60);
  });
});