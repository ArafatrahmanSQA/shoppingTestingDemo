class ProductPage {
  /**
   * Selects size 'JP 28.5' if available.
   * Scrolls into view and clicks the size label.
   * Throws an error if the size is not available.
   */

  selectSize() {
    cy.contains('label', 'JP 28.5').then($btn => {
      if (!$btn.is(':disabled')) {
        cy.wrap($btn).scrollIntoView().click();
      } else {
        throw new Error('Size 28.5 is not available');
      }
    });
  }
/**
   * Clicks the "Add to Bag" button.
   * Waits briefly to ensure the button is fully interactable.
   * Uses force click in case the button is slightly covered or off-screen.
   */

  addToCart() {
    cy.get('button.btn-primary-dark.btn-lg').should('be.visible')
      .wait(1000)
      .click({ force: true });
  }

/**
   * Navigates to the cart/bag page by clicking the cart icon.
   * Uses a force click to ensure navigation even if it's not fully visible.
   */

  goToCart() {
    cy.get('a[aria-label^="Bag Items"]').click({ force: true });

  }
}

export default ProductPage;
