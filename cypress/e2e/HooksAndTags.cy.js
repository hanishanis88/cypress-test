//HOOK

//4 types of hook
    //(1) before -- execute before executing it block (one time)
    //(2) after -- execute after executing it block (one time)
    //(3) beforeEach -- execute before each of it block (many times)
    //(4) afterEach -- execute after each of it block (many times)

describe('MyTestSuite', ()=> {
    before(()=>{
        cy.log('****** launch APP ******')
    })

    after(()=>{
        cy.log('****** close APP ******')
    })

    beforeEach(()=>{
        cy.log('****** Login ******')
    })

    afterEach(()=>{
        cy.log('****** Logout ******')
    })

    it('search', ()=>{
        cy.log('****** searching ******')
    })

    it.skip('advanced search', ()=>{
        cy.log('****** advanced searching ******')
    })

    it('listing products', ()=>{
        cy.log('****** listing products ******')
    })


    //TAG
        //(1).only
        //(2).skip



})