import User from '../src/js/User.js';

describe('User', () => {

  test('Should correctly take in the users age', () => {
    const user0 = new User(28);
    expect(user0.earthAge).toEqual(28);
  });

});