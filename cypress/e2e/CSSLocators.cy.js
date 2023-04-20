describe('CSSLocators', () => {
    it('CSSLocators', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--p").contains("Buzz Latest Posts") //Assertion
   
    })  
   
    
        
})