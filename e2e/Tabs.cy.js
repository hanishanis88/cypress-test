describe('handle tab approach 1',()=>{
    it('approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') //open parent tab
        cy.get('.example >a').invoke('removeAttr', 'target').click() //click link to open child tab in same tab as parent
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)

        //operations
        cy.go('back') //back to parent tab
    })

    it.only('approach 2', ()=>{ //limitation-domain must match
        cy.visit('https://the-internet.herokuapp.com/windows') //open parent tab
        cy.get('.example >a').then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
            cy.wait(5000)
        })
        
        //operations
        cy.go('back') //back to parent tab
    })
})