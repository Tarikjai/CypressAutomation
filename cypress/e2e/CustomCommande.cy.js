//click on link using label
// over writing existing contains() command
// re-usuable custom command

describe('Custom commands',()=>{ 

    it('Custom commands',()=>{ 

        cy.visit("http://demo.nopcommerce.com")

        //direct - without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
        //.click()

        //using custom command
         cy.clickLink("Apple MacBook Pro 13-inch")
         cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

    })


    it.skip('overwriting existing command',()=>{ 
        cy.visit("http://demo.nopcommerce.com")



        //using custom command
         cy.clickLink("APple MacBook Pro 13-inch")
         cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

    })

    
    it.only('Login commands',()=>{ 

        //Login
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

        cy.clickLink("Log in")
        
        cy.loginapp("napty89@gmail.com","Atiminou5*")

        cy.get(".ico-account").should('have.text','My account')
        //Search

        
    })

})