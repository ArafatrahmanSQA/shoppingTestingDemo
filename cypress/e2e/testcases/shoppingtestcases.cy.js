/**
 * shoppingFlow.cy.js
 * 
 * This test script automates the shopping flow on the Nike Japan website using Cypress.
 * It covers:
 *  - Visiting the home page
 *  - Searching for a product (Shoes)
 *  - Selecting a product and size
 *  - Adding the product to the cart
 *  - Verifying that the product was successfully added
 * 
 * Author: [ARAFAT RAHMAN]
 * Date: [25/04/2025]
 * Project: CypressProjectForShoppingTest
 */

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
    
    // Step 1: Visit the Shopping site homepage
    home.visit(); 
    // Step 2: Search for "Shoes"
    home.searchForProduct('Shoes');
    // Step 3: Click on the first product in the search results
    search.clickFirstProduct();
    
    // Step 4: Select an available shoe size (28.5 preferred)
    product.selectSize();

    // Step 5: Add the selected product to the cart
    product.addToCart();

    // Step 6: Navigate to the cart page
    product.goToCart();

    // Step 7: Verify the cart contains the product
    cart.verifyProductInCart('Shoes');
  });
});
