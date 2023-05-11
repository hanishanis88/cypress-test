import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('mouse operation', ()=>{
    it('Mouse Hover', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('be.visible')
    })

    it('Right Click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Approach 1 -- using trigger (contextmenu)
        cy.get('.context-menu-list.context-menu-root').should('not.be.visible')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-list.context-menu-root').should('be.visible')


        // //Approach 2 -- using rightclick
        // cy.get('.context-menu-list.context-menu-root').should('not.be.visible')
        // cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        // cy.get('.context-menu-list.context-menu-root').should('be.visible')
    })

    it('Double Click', ()=>{
        // cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick')
        // cy.frameLoaded('#iframeResult')
        // cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
        // cy.iframe('#iframeResult').find('#demo').should('have.value', 'Hello World')

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick() //dblclick() method or trigger method
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')
    })

    it('Drag and Drop', ()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        //cy.wait(3000)
        cy.get('#box6').drag('#box106', {force:true})
    })

    it.only('Mouse Scroll', ()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(37) > td:nth-child(2)').scrollIntoView({duration:2000})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(37) > td:nth-child(2)').should('be.visible')
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(19) > td:nth-child(2)').scrollIntoView({duration:2000})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(19) > td:nth-child(2)').should('be.visible')
        cy.get('#footer').scrollIntoView({duration:2000})
    })

})