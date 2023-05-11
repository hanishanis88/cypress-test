//Assertion
    //Implicit have should -- and 
        //keyword
            //1.eq
            //2.contain
            //3.include
            //4. exist
            //5. have.length
            //6. have.value
            //etc...
            
    //Explicit have expect and assert
    
    

describe('Assertion demo',  () => {
    it('Implicit assertions1', {tags: 'validate url'}, () => {
       
        cy.visit('https://bstackdemo.com/')
        cy.url().should('include', 'bstackdemo.com')
        cy.url().should('eq', 'https://bstackdemo.com/')
        cy.url().should('contain', 'bstackdemo')

        //another way to write multiple assertions
        
        cy.url().should('include', 'bstackdemo.com')
        .should('eq', 'https://bstackdemo.com/')
        .should('contain', 'bstackdemo')

        //or can use and

        cy.url().should('include', 'bstackdemo.com')
        .and('eq', 'https://bstackdemo.com/')
        .and('not.contain', 'bstackdemo')
    })

    it('Implicit assertions2', {tags:'validate homepage'}, () => {
        cy.visit('https://bstackdemo.com/')
        cy.get('.justify-between > .items-center'). should('be.visible')
        cy.get('.justify-between > .items-center'). should('exist')
    })

    it('Explicit assertions', {tags:'login'}, () => {
        cy.visit('https://bstackdemo.com/signin')
        cy.get('#username').
        cy.get('#password').should('eq','testingisfun99')
        cy.get('#login-btn').click()
    })

    //to be continued after learn interacting with element of dropdown
})