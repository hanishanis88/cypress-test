import 'cypress-iframe'

describe('handling frmae', ()=>{
    it('approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        let iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframe.clear().type('Welcome {ctrl+a}')
            cy.get('[aria-label="Bold"]').click()
    })

    it('approach 2 - by using custom command', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()
    })

    it('approach 3 - by using sypress iframe plugin', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.frameLoaded('#mce_0_ifr'); //load the frame
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()
    })

})