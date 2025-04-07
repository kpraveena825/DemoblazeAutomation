class HomePage {

    get loginButton() {
        return cy.get('button[onClick="logIn()"]').first();
    }

    /**
    * Launch the site and verify the header of page. 
    */
    visitUrl() {
        cy.visit("https://demoblaze.com/")
        cy.contains('PRODUCT STORE').should('be.visible');
    }

    /**
     * Performs login by entering the provided username and password,
     * then clicking the login button.
     *
     * @param {string} uname - The username to enter.
     * @param {string} password - The password to enter.
     */
    login(uname, password) {
        cy.get('#login2').click();
        cy.get('#loginusername').type(uname);
        cy.get('#loginpassword').type(password);
        this.loginButton.click();
    }

    /**
     * Verifies that the homepage is correctly loaded after login
     * by checking the welcome message and main header.
     *
     * @param {string} uname - The username expected in the welcome message.
     */
    verifyHomePage(uname) {
        cy.get('#nameofuser').should('contain.text', "Welcome " + uname + "");
        cy.contains('PRODUCT STORE').should('be.visible');
    }

    /**
     * Validates that an alert with the expected error message appears on invalid login.
     *
     * @param {string} alertMessage - The expected alert message (e.g., "Wrong password.").
     */
    invalidLoginValidation(alertMessage) {
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(alertMessage);
        });
        cy.on('window:alert', () => true);
    }

}
export default HomePage;