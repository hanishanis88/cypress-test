//Locate element using selector - CSS selector or Xpath
//CSS selector
    //1. id => #id
    //2. class => .class
    //3. attribute => [attribute ='value']
    //4. class attribute +> .class [attribute ='value']

describe ('CSSLocator', () => {
    it('test1-filters functioning', () => {
        cy.visit('https://bstackdemo.com/')
        cy.get('.title').contains('Vendors:')
        cy.get('[type="checkbox"]').check(['Apple'], {force: true})
        cy.get('.products-found').contains('9')
    })

    it('test2-filters not functioning', () => {
        cy.visit('https://bstackdemo.com/')
        cy.get('.title').contains('Vendors:')
        cy.get('[type="checkbox"]').check(['Samsung'], {force: true})
        cy.get('.products-found').contains('9')
    })
} )