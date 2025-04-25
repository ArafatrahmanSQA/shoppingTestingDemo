Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore fetch failures
    if (err.message.includes('Failed to fetch')) {
      return false; 
    }
  });