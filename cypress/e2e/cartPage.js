class CartPage {
  verifyProductInCart(keyword) {
    cy.get('body').then(($body) => {
      if ($body.find('div[data-qa="cart-product-title"]').length > 0) {
        // Product element is present in the cart
        cy.get('div[data-qa="cart-product-title"]')
          .should('contain.text', keyword)
          .then(($productTitle) => {
            if (!$productTitle.text().includes(keyword)) {
              throw new Error(`Product "${keyword}" was not found in the cart`);
            }
          });
      } else {
        // No product found in cart, validate the empty cart message
        cy.contains('There are no items in your bag.')
          .should('be.visible');
      }
    });
  }
  }

export default CartPage;

    
