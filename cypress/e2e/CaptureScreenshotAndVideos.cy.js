

describe('mysuite', ()=>
{
    it('Capture ScreenShots & Videos', ()=>
    {
        cy.visit('https://demo.opencart.com')
       /* cy.screenshot('homePage')
        cy.wait(3000)
       cy.get("img[title='Your Store']").screenshot("logo") */
        
        //Automatically capture Screenshot & video on failure

        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Iphone')

})


})