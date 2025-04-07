import cartPage from '../support/pageObjects/CartPage';
import HomePage from '../support/pageObjects/HomePage';
import ProductPage from '../support/pageObjects/ProductPage';
describe('Product purchase flow ', () => {

    const homePage = new HomePage();
    const productPage = new ProductPage();

    beforeEach(function () {
        cy.fixture('productDetails').as('product');
        cy.fixture('userDetails.json').then((userData) => {
            this.userData = userData;
            homePage.visitUrl();
            homePage.login(userData.userDetails.username, userData.userDetails.password);
            homePage.verifyHomePage(userData.userDetails.username);

        });

    });

    it('verify cart total before and after deleting an item', function () {
        const data = this.userData.userDetails;
        const laptopTitle = this.product.categories.laptops;
        productPage.productSelection(laptopTitle.name,laptopTitle.products[0].title);

        productPage.addtoCart();
        productPage.multipleProductSelection(laptopTitle.name,laptopTitle.products[1].title)
        
        cartPage.productTotalSum().then((productTotal) => {
            cartPage.getCartTotal().should('equal', productTotal);
        });
        
        cartPage.deleteItem();
        
        cartPage.productTotalSum().then((productTotal) => {
            cartPage.getCartTotal().should('equal', productTotal);
        });
      
    })
    
})