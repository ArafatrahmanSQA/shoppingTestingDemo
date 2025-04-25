class HomePage {

  /**
   * Navigates to the Nike Japan homepage.
   */

  visit() {
    cy.visit('https://www.nike.com/jp/en/');
  }

  searchForProduct(product) {
    cy.get('#gn-search-input').click({ force: true }).type(`${product}{enter}`);
  }
}

export default HomePage;
