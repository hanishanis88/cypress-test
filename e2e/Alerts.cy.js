describe('Alerts', ()=>{

    //(1) Javascript Alert: It will have some tect and and 'OK' button
    it('normal JS alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window automatically closed by cypress
        //hence to validate
        //need to validate after the alert
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    //(2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('confirmation JS alert - Ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        //alert window automatically closed by cypress using OK button
        //hence to validate
        //need to validate after the alert
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('confirmation JS alert - Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        //close alert using Cancel button
        cy.on('window:confirm', ()=> false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    //(3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
    it('prompt JS alert - Ok', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: welcome')
    })

    it('prompt JS alert - Cancel', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get('[onclick="jsPrompt()"]').click()
         //close alert using Cancel button
         cy.on('window:prompt', ()=> false)
         cy.get('#result').should('have.text', 'You entered: null') //have issue
    })


    //(4) Authenticated Alert
    it.only('authenticated alert', ()=>{

        //approach 1 -- pass username & password using {auth:}
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',
        //     {auth:
        //         {username:'admin', 
        //         password:'admin'}
        //     }
        // )
        // cy.get('.example').should('have.contain', 'Congratulations!')

        //approach 2 -- put credential in the link
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('.example').should('have.contain', 'Congratulations!')
    })
})