import 'cypress-iframe'; 

require ("@4tw/cypress-drag-drop")

describe("handle tables", ()  => {

    it('Mouse Hover', ()  => {

        cy.visit('https://demo.opencart.com/')
      // cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
      
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');
    
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');



    })


    it("Right click", () => {
        
        //Approach1
        cy.visit('https://practice.expandtesting.com/context-menu')
        cy.get('#hot-spot').rightclick();
        cy.get('#hot-spot').trigger('contextmenu')

    
    }) 


    it("Double clock", () => {
    
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/mouseevents.html")
        cy.get('#dblclick').dblclick()
      

        
    }) 

 
    it("Drag andr Drop using plugin", () => {

            cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
            cy.frameLoaded("#iframeResult"); 

        /*    //Approach 1
            cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
            cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')*/

            //Approach 2
            cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
            cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')
    }) 

    it('Drag and Drop using plugins', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
       
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{force:true});
    }) 




    it("Scrolling Page", () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
       
        cy.get(':nth-child(110) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(110) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(67) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(67) > :nth-child(1) > img').should('be.visible')
    })  


})   