describe('XPathLocators', () => {

    it('find the username' , () => {
        
        cy.visit('https://demo.applitools.com/')
     //   cy.xpath("//input[@id='username']").should('have.length',1)
       cy.xpath("//input[@id='username']").should('have.length',1)
    })
})