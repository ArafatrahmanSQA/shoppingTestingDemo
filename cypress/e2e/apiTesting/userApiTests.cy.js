
// ***********************************************************
// API TEST: GET /api/user
// Author: [ARAFAT RAHMAN]
// Date: [25/04/2025]
// ***********************************************************

describe('API Tests for GET /api/user', () => {

  // ***********************************************************
  // Test Case 1: To check Valid User ID
  // ***********************************************************

    it('should return user data when valid id is provided', () => {
      cy.request('GET', '/api/user?id=123')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', 123);
          expect(response.body).to.have.property('name', 'Jason');
        });
    });
  
  // ***********************************************************
  // Test Case 2: To check In-valid User ID
  // ***********************************************************

    it('should return 404 when the user id does not exist', () => {
      cy.request({
        method: 'GET',
        url: '/api/user?id=999', // To check with invalid id 999
        failOnStatusCode: false  
      })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'User not found');
      });
    });
  
  // ***********************************************************
  // Test Case 3: To Check Validate User Name
  // ***********************************************************

  it('should return the correct user name when a valid user id is provided', () => {
    
    cy.request('GET', '/api/user?id=123').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Jason');
    });
    });
  });
  