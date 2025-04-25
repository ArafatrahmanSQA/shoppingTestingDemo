class ProductPage {
  selectSize() {
    cy.contains('label', 'JP 28.5').then($btn => {
      if (!$btn.is(':disabled')) {
        cy.wrap($btn).scrollIntoView().click();
      } else {
        throw new Error('Size 28.5 is not available');
      }
    });
  }

  addToCart() {
    cy.get('button.btn-primary-dark.btn-lg').should('be.visible')
      .wait(1000)
      .click({ force: true });
  }


  goToCart() {
    cy.get('a[aria-label^="Bag Items"]').click({ force: true });

  }
}

export default ProductPage;
