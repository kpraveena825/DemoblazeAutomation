class ProductPage {

    get addToCartButton() {
        return cy.contains('Add to cart');
    }

    get productPrice() {
        return cy.get('.price-container');
    }

    selectCategory(category) {
        cy.contains(category).click();
    }

    selectProduct(productName) {
        cy.contains(productName).click();
    }

    addtoCart() {
        this.addToCartButton.click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Product added.');
        });
        cy.on('window:alert', () => true);
    }

    getProductPrice() {
        return this.productPrice.then((price) => {
            return Number(price.text().replace(/[^0-9]+/g, ""));
        });
    }
}
export default ProductPage