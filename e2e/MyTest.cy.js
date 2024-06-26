describe('Tests with Cypress', () => {
  
    beforeEach(() => {
      // Runs before each test
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('Login Test', () => {
      // Find username and password fields and login button
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Verify if login was successful by checking for a specific element on the next page
      cy.get('.title').should('have.text', 'Products');
    });
  
    it('Shopping Cart Test', () => {
      // Login first
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Add items to the cart
      cy.get('.inventory_item').first().find('.btn_inventory').click();
  
      // Navigate to the cart page
      cy.get('.shopping_cart_link').click();
  
      // Verify items in the cart
      cy.get('.cart_item').should('have.length', 1);
    });
  
    it('Logout Test', () => {
      // Login first
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Open menu and logout
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
  
      // Verify if logout was successful by checking for login button
      cy.get('#login-button').should('be.visible');
    });
  
  });
  