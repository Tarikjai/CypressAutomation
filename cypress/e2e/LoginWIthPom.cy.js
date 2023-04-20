import Login from "../PageObjects/LoginPage2"

describe("POM", ()  => {

        //General approach

    it("LoginTest", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--p").contains("Buzz Latest Posts") //Assertion
    })         
    it("LoginTest", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        const ln= new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifylogin()
    }) 
    //using pom with fixture

    it.only("LoginTest", () => {

           cy.visit('https://opensource-demo.orangehrmlive.com/')

           cy.fixture("orangehrm").then((data) => { 

                 const ln= new Login();
                  ln.setUserName(data.username) 
                  ln.setPassword(data.password) 
                  ln.clickSubmit()
                  ln.verifylogin()
             
         }) 
    }) 
})