class SearchResultsPage {

  /**
   * Clicks the first product image on the search results page.
   * Uses force click in case the image is overlapped by another element.
  */

  clickFirstProduct() {
    cy.get('img[alt="Nike Air Force 1 \'07 Men\'s Shoes"]').click({ force: true });
  }
}

export default SearchResultsPage;
