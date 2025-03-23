class HomePage {

    get loginButton() {
        return cy.get('button[onClick="logIn()"]').first();
    }

    visitUrl() {
        cy.visit("https://demoblaze.com/")
        cy.contains('PRODUCT STORE').should('be.visible');
    }

    login(uname, password) {
        cy.get('#login2').click();
        cy.wait(1000);
        cy.get('#loginusername').type(uname);
        cy.get('#loginpassword').type(password);
        this.loginButton.click();
    }

    verifyHomePage(uname) {
        cy.get('#nameofuser').should('contain.text', "Welcome " + uname + "");
        cy.contains('PRODUCT STORE').should('be.visible');
    }

    invalidLoginValidation() {
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Wrong password.');
        });
        cy.on('window:alert', () => true);
    }

}
export default HomePage;