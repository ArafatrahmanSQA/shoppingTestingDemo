class SearchResultsPage {
  clickFirstProduct() {
    cy.get('img[alt="Nike Air Force 1 \'07 Men\'s Shoes"]').click({ force: true });
  }
}

export default SearchResultsPage;
