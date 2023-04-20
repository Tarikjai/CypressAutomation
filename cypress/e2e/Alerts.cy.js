 
describe('Alert 2', ()=> {

    it('Hande alerts',()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
          cy.get("button[onclick='jsAlert()']").click()

          cy.on('Windows:alert',(t)=> {
        expect(t).to.contains('I am a JS Alert')

          })

          //alert windows automatically closed by cypress

          
          cy.get('#result').contains('You successfully clicked an alert')
          .should('have.text','You successfully clicked an alert')
    })

    //2/ Javascript Confirm Alert: It will have some text with 'ok' and 'Cancel' buttons
    it('JS confim alerts',()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

          cy.get("button[onclick='jsConfirm()']").click()

          cy.on('Windows:confirm',(t)=> {
        expect(t).to.contains('I am a JS Confirm')

          })

          //alert windows automatically closed by cypress

          
          cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('JS confim alerts',()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

          cy.get("button[onclick='jsConfirm()']").click()

          cy.on('Window:confirm',(t)=> {
        expect(t).to.contains('I am a JS Confirm')

          })

          //alert windows closed by cancel
 
          cy.on('window:confirm', () => false);
            
          
          cy.get('#result').should('have.text','You clicked: Cancel')
    })
    //3/ Javascript Prompt Alert: It will have some text with a text box for user input along with 'ok'
    it('JS prompt alerts',()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then((win)=> {
                cy.stub(win,'prompt').returns('welcome');
                
            })

          cy.get("button[onclick='jsPrompt()']").click()

        //  cy.on('window:prompt', () => false);

          //alert windows closed by cancel
           
          cy.get('#result').should('have.text','You entered: welcome')
    })

    it('Authenticator',()=> {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                    {
                                                                        username:"admin",
                                                                        password:"admin"}
                                                                    })
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")                                                            
 
    })

    it('Authenticator 2',()=> {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")                                                            
 
    })
})