import cartPage from './CartPage';

class ProductPage {

    get addToCartButton() {
        return cy.contains('Add to cart');
    }

    get productPrice() {
        return cy.get('.price-container');
    }

    get homeButton() {
        return cy.contains('Home');
    }

    selectCategory(category) {
        cy.contains(category).click();
    }

    selectProduct(productName) {
        cy.contains(productName).click();
    }

    /**
     * Selects a specific product from a given category.
     *
     * @param {string} category - The category to select (e.g., "Laptops").
     * @param {string} product - The product to select within the category.
     */
    productSelection(category, product){
        this.selectCategory(category);
        this.selectProduct(product);
    }

    /**
     * Clicks the "Add to Cart" button and verifies the success alert message.
     */
    addtoCart() {
        this.addToCartButton.click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Product added.');
        });
        cy.on('window:alert', () => true);
    }

    /**
     * Retrieves and returns the numeric price of the selected product.
     *
     * @returns The product price as a number.
     */
    getProductPrice() {
        return this.productPrice.then((price) => {
            return Number(price.text().replace(/[^0-9]+/g, ""));
        });
    }

    /**
     * Selects and adds a single product to the cart from a specified category,
     * then navigates to the cart page.
     *
     * @param {string} category - The category from which to choose the product.
     * @param {string} product - The product to add to the cart.
     */
    multipleProductSelection(category,product){
        this.homeButton.click();
        this.selectCategory(category)
        this.selectProduct(product)
        this.addtoCart();
        cartPage.cartClick();
    }
}
export default ProductPage