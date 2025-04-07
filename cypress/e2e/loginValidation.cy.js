import HomePage from '../support/pageObjects/HomePage';

describe('Login Validation', () => {

    const homePage = new HomePage();

    const loginData = require('../fixtures/loginUser.json');

    describe('Login validation with invalid credentials', () => {
      loginData.forEach((user, index) => {
        it(`Test case ${index + 1}: Login with username "${user.username}" and password "${user.password}"`, () => {
          homePage.visitUrl();
          homePage.login(user.username, user.password);
          homePage.invalidLoginValidation(user.alertMessage);
        });
      });
    });
})