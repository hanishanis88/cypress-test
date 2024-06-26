describe('MyTestSuite', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    let userdata

    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata=data
        })
    })
    //Direct access
        // it('FixturesDemoTest', ()=>{

        //     cy.fixture('orangehrm').then((data)=>{
        //         cy.get('[placeholder="Username"]').type(data.username)
        //         cy.get('[placeholder="Password"]').type(data.password)
        //         cy.get('[type="submit"]').click()
        //         cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains(data.expected)
        //     })
            
        // })

    //Access through hook - for multiple it blocks
        it('FixturesDemoTest', ()=>{
            cy.get('[placeholder="Username"]').type(userdata.username)
            cy.get('[placeholder="Password"]').type(userdata.password)
            cy.get('[type="submit"]').click()
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains(userdata.expected)
                    
        })
})