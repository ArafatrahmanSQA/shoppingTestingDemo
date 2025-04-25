import HomePage from '../HomePage';
import SearchResultsPage from '../SearchResultsPage';
import ProductPage from '../ProductPage';
import CartPage from '../cartPage';

const home = new HomePage();
const search = new SearchResultsPage();
const product = new ProductPage();
const cart = new CartPage();

describe('Nike Shopping Flow Test', () => {
  it('Should search and add a random shoes size to cart and verify it', () => {
    home.visit();
    home.searchForProduct('Shoes');

    search.clickFirstProduct();
    
    product.selectSize();
    product.addToCart();
    product.goToCart();

    cart.verifyProductInCart('Shoes');
  });
});
