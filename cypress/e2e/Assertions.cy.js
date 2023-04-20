describe("Assertion demp", ()  => {

    it("Implicit assertions", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        // should
        /*cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrmlive') 

        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive') */

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','orangehrmlive1')

        // Title corespandance 

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        // Logo presence

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

         //  capture all the link in the page
        cy.xpath("//a").should('have.length','5')

        // type a value and check it 

        cy.get("input[placeholder='Username']").type('Admin')

        cy.get("input[placeholder='Username']").should('have.value','Admin')
    }) 

    it("Explicit assertions", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
            
            let expName="Kek Keko";

            let expName1="Kek Keko1";

            cy.get(".oxd-userdropdown-name").then( (x)=> {

                let actName=x.text()

                // BDD
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName1)

                //TDD
                assert.equal(actName,expName)
                assert.notEqual(actName,expName1)


            })   
    })
    
})