describe ('Handling Dropdowns',()=> {
    it.skip ('dropdown with select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Japan').should('have.value', 'Japan')
    })

    it.skip ('dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Japan')    
    })

    it.skip('static auto suggest dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Japan')
        cy.get('.suggestion-title').contains('Japanese war crimes').click()
        cy.get('#firstHeading').should('have.value', 'Japanese war crimes')
    })

    it('dynamic dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('[name="q"]').type('japanese restaurant')
        cy.wait(3000)
        cy.get('.wM6W7d').should('have.length', 12)
        cy.get('.wM6W7d').each( ($el, index, $list)=>{
           if($el.text()=='japanese restaurant near me')
           {
            cy.wrap($el).click()
            cy.wait(5000)
           }
        })
        cy.get('[name="q"]').should('have.value', 'japanese restaurant near me')
    })
})