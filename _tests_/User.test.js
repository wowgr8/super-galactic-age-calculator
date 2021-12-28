import User from '../src/js/User.js';

describe('User', () => {

  test('Should correctly take in the users age', () => {
    const user0 = new User(28);
    expect(user0.earthAge).toEqual(28);
  });

  test('Should correctly divide user age by Mercury years', () => {
    const user0 = new User(28);
    expect(user0.mercury()).toEqual(116.66666666666667)
  });

  test('Should correctly divide user age by Venus years', () => {
    const user0 = new User(28);
    expect(user0.venus()).toEqual(45.16129032258065)
  });

  test('Should correctly divide user age by Mars years', () => {
    const user0 = new User(28);
    expect(user0.mars()).toEqual(14.893617021276597)
  });

  test('Should correctly divide user age by Jupiter years', () => {
    const user0 = new User(28);
    expect(user0.jupiter()).toEqual(2.3608768971)
  });
});