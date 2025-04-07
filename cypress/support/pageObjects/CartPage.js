class CartPage {

    get cartTotal() {
        return cy.get('#totalp').first();
    }

    cartClick() {
        return cy.get('#cartur').click();
    }

    deleteItem() {
        return cy.contains('Delete').first().click();
    }

    placeOrder() {
        cy.contains('Place Order').click();
    }

    /**
    * Function to return total cart amount
    */
    getCartTotal() {
        return this.cartTotal.then((total) => {
            return Number(total.text().trim());
        });
    }

    /**
     * Validates that the cart page displays the specified item
     * and contains at least one row in the cart table.
     * @param {string} itemName - The name of the item to validate in the cart.
     */

    validateCart(itemName) {
        this.cartClick();
        cy.contains(itemName).should('be.visible');
        cy.get('tbody tr').should('have.length.at.least', 1);

    }

    /**
     * Extract the total sum of the products in cart page
     */

    productTotalSum() {
        let sum = 0;
        return cy.get('td:nth-child(3)').each((price) => {
            sum = sum + Number(price.text());
        }).then(() => sum);
    }

    /**
     * Validates that the cart page displays the specified item.
     */

    productValidation(itemName) {
        cy.contains(itemName).should('be.visible');
    }

    /**
    * Function to fill and submit user details during 
    * checkout process. 
    */
    submitOrderForm(name, country, city, card, month, year) {
        cy.get('#name').type(name);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(card);
        cy.get('#month').type(month);
        cy.get('#year').type(year);
        cy.get('button[onclick="purchaseOrder()"]').click();
    }

    /**
     * Verify order confirmation overlay 
     * 
     */
    validateSuccessPopup(name, card) {
        cy.contains('Thank you for your purchase!').should('be.visible');

        cy.get('*[class^="lead"]').then((orderDetails) => {
            const orderConfm = orderDetails.text();
            expect(orderConfm.includes(name)).to.be.true;
            expect(orderConfm.includes(card)).to.be.true;
        });
        cy.get('*[class^="confirm"]').click();
    }


}
export default new CartPage;