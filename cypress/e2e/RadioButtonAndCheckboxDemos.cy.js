describe("Check UI element", ()  => {

    it("Checking Radio button", () => {
         cy.visit('https://practice.expandtesting.com/')
   
         cy.get(".my-link.stretched-link").contains("Radio Buttons").click()
        
        // Visibility of radio buttons

          cy.get("input#red").should('be.visible')
          cy.get("input#blue").should('be.visible')

        //selecting radio buttons

        cy.get("input#black").check().should('be.checked')
        cy.get("input#blue").should('not.be.checked')

        cy.get("input#blue").check().should('be.checked')
        cy.get("input#black").should('not.be.checked')
    })





    it("Checking check box", () => {
         cy.visit('https://practice.expandtesting.com/checkboxes')
   
        cy.get("input.form-check-input[type='checkbox']").should('be.visible')
        
        // Visibility of checkbox

          cy.get("input#checkbox1").should('be.visible')
          cy.get("input#checkbox2").should('be.visible')

        //selecting radio buttons 1 

        cy.get("input#checkbox1").check().should('be.checked')
        cy.get("input#checkbox1").uncheck().should('not.be.checked')
       
        // //selecting radio buttons 2 
        cy.get("input#checkbox2").check().should('be.checked')
        cy.get("input#checkbox2").uncheck().should('not.be.checked')
      
        // Selection all the check box

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

         // Select the first check and tlast box

         cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
         cy.get("input.form-check-input[type='checkbox']").last().uncheck().should('not.be.checked')
 
 
    })  
})