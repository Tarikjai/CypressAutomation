class Login

{
    setUserName(username)
    {
        cy.get("[name='username']").type(username)
    }

    setPassword(password)
    {
        cy.get("[name='password']").type(password)
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click()
    }

    verifylogin(verify)
    {
        cy.get(".oxd-text.oxd-text--p").contains("Buzz Latest Posts") //Assertion
    }


}

export default Login;