import User from '../src/js/User.js';

describe('User', () => {

  test('Should correctly take in the users age', () => {
    const user0 = new User(28);
    expect(user0.earthAge).toEqual(28);
  });

  test('Should correctly divide user age by Mercury years', () => {
    const user0 = new User(28);
    expect(user0.mercury()).toEqual(116.66666666666667)
  })
});