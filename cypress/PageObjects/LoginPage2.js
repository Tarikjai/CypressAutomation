class Login

{
    txtUsername="[name='username']"
    txtPassword="[name='password']"
    btnSubmit="button[type='submit']"
    lblmsg=".oxd-text.oxd-text--p"


    setUserName(username)
    {
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    verifylogin(verify)
    {
        cy.get(this.lblmsg).contains("Buzz Latest Posts") //Assertion
    }


}

export default Login;