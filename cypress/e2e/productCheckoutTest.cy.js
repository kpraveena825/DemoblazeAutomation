import CartPage from '../support/pageObjects/CartPage';
import HomePage from '../support/pageObjects/HomePage';
import ProductPage from '../support/pageObjects/ProductPage';
describe('Product purchase flow ', () => {

    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();

    beforeEach(function () {
        cy.fixture('productDetails').as('product');
        cy.fixture('userDetails.json').then((userData) => {
            this.userData = userData;
            homePage.visitUrl();
            homePage.login(userData.userDetails.username, userData.userDetails.password);
            homePage.verifyHomePage(userData.userDetails.username);

        });

    });

    it('Place an order for Laptop', function () {
        const data = this.userData.userDetails;
        const laptopTitle = this.product.categories.laptops;

        productPage.productSelection(laptopTitle.name,laptopTitle.products[0].title);

        productPage.getProductPrice().then((productPrice) => {
            expect(productPrice).equal(laptopTitle.products[0].price);
        });
        productPage.addtoCart();
        cartPage.validateCart(laptopTitle.products[0].title);
        cartPage.productTotalSum().then((productTotal) => {
            cartPage.getCartTotal().should('equal', productTotal);
        });
        cartPage.placeOrder();
        cartPage.submitOrderForm(data.name, data.country, data.city, data.card, data.month, data.year);
        cartPage.validateSuccessPopup(data.name, data.card, laptopTitle.products[0].price);
    })

    it('Place an order for multiple products to validate cart total', function () {
        const data = this.userData.userDetails;
        const laptopTitle = this.product.categories.laptops;

       
        productPage.productSelection(laptopTitle.name,laptopTitle.products[0].title);

        productPage.getProductPrice().then((productPrice) => {
            expect(productPrice).equal(laptopTitle.products[0].price);
        });
        productPage.addtoCart();
        cartPage.validateCart(laptopTitle.products[0].title);

        productPage.multipleProductSelection(laptopTitle.name,laptopTitle.products[1].title)
        cartPage.validateCart(laptopTitle.products[1].title);

        cartPage.productTotalSum().then((productTotal) => {
            cartPage.getCartTotal().should('equal', productTotal);
        });
        cartPage.placeOrder();
        cartPage.submitOrderForm(data.name, data.country, data.city, data.card, data.month, data.year);
        cartPage.validateSuccessPopup(data.name, data.card);
    })


})