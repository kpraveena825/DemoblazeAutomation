class CartPage {

    get cartTotal() {
        return cy.get('#totalp').first();
    }

    getCartTotal() {
        return this.cartTotal.then((total) => {
            return Number(total.text().trim());
        });
    }

    validateCart(itemName) {
        cy.get('#cartur').click();
        cy.contains(itemName).should('be.visible');
        cy.get('tbody tr').should('have.length.at.least', 1);

    }

    productTotalSum() {
        let sum = 0;
        return cy.get('td:nth-child(3)').each((price) => {
            sum = sum + Number(price.text());
        }).then(() => sum);
    }

    productValidation(itemName) {
        cy.contains(itemName).should('be.visible');
    }

    placeOrder() {
        cy.contains('Place Order').click();
    }

    submitOrderForm(name, country, city, card, month, year) {
        cy.get('#name').type(name);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(card);
        cy.get('#month').type(month);
        cy.get('#year').type(year);
        cy.get('button[onclick="purchaseOrder()"]').click();
    }

    validateSuccessPopup(name, card, amount) {
        cy.contains('Thank you for your purchase!').should('be.visible');

        cy.get('*[class^="lead"]').then((orderDetails) => {
            const orderConfm = orderDetails.text();
            expect(orderConfm.includes(name)).to.be.true;
            expect(orderConfm.includes(card)).to.be.true;
            expect(orderConfm.includes(amount)).to.be.true;
        });
        cy.get('*[class^="confirm"]').click();
    }

}
export default CartPage;