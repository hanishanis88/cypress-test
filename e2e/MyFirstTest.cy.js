//how to write?
//can use => or ()function

describe('My First Test', () => {
    it('test1-verify title-pass', () => {
        //steps
        cy.visit ('https://bstackdemo.com/')
        cy.title().should('eq', 'StackDemo')
    })

    it('test2-verify title-fail', () => {
        //steps
        cy.visit ('https://bstackdemo.com/')
        cy.title().should('eq', 'StackingDemo')
    })
  }) 

  //or

//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
//   }) 

