describe('Tests with Cypress', () => {
  
    beforeEach(() => {
      // Runs before each test
      cy.visit('https://bstackdemo.com/');
    });

    it('LoginTest', () =>{
      cy.get('#signin', {timeout: 10000}).click();
      cy.get('#username').type('demouser{enter}').enter;
      cy.get('#password').type('testingisfun99{enter}');
      cy.get('#login-btn').click();

      // Verify if visit successfully
      cy.get('.title').should('have.text', 'Vendors:');

      // Add to cart item
      cy.get('img[alt="iPhone 12"]', {timeout: 10000}).should('exist');
      cy.get('div[id="1"] div[class="shelf-item__buy-btn"]', {timeout: 10000}).click();
    })
  
  });
  