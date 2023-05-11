describe ('Check UI Elements', ()=> {
    it ('Checking Radio Buttons', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        
        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })

    it('Checking Checkboxes', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //visibility of checkboxes
        cy.get('#monday').should('be.visible')

        //selecting single checkbox - monday
        cy.get('#monday').check().should('be.checked')

        //unselecting single checkbox - monday
        cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all checkboxes
        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')

        //unselect all chekboxes
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //select first or last checkbox
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

        //unselect first or last checkbox
        cy.get('.form-check-input[type="checkbox"]').first().uncheck().should('not.be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().uncheck().should('not.be.checked')

        //select other than first and last checkbox
        cy.get('.form-check-input[type="checkbox"]').eq(3).check().should('be.checked')

        //unselect other than first and last checkbox
        cy.get('.form-check-input[type="checkbox"]').eq(3).uncheck().should('not.be.checked')
    })
})