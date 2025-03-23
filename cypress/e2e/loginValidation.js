import HomePage from '../support/pageObjects/HomePage';

describe('Login Validation', () => {

    const homePage = new HomePage();

    beforeEach(() => {
        cy.fixture('userDetails').as('credentials');
    });

    it('Login validation with invalid user', function () {
        const data = this.credentials.invalidCred;
        homePage.visitUrl();
        homePage.login(data.username, data.password);
        homePage.invalidLoginValidation();

    })

})