import 'cypress-iframe'; 


describe('Hadling Frames', ()=> {
   

    it('Approach 1',()=> {

    cy.visit('https://the-internet.herokuapp.com/iframe')

    // Cette ligne sélectionne l'élément de la page avec l'ID "#mce_0_ifr" et stocke une référence à cet élément dans la variable "iframe".
    const iframe=cy.get("#mce_0_ifr")
        // Cette ligne récupère l'élément "body" du contenu de l'iframe et retourne une référence à cet élément.
        .its('0.contentDocument.body')
        // Cette ligne vérifie que l'élément "body" est visible dans la page.
        .should('be.visible')
        // Cette ligne enroule l'élément "body" dans un objet Cypress pour permettre des opérations supplémentaires.
        .then(cy.wrap);

        // Cette ligne efface le contenu de l'élément "body" de l'iframe et y tape le texte "Welcome".
         iframe.clear().type("Welcome {ctrl+a}");

        cy.get("button[title='Bold']").click()     
    })

    it('Approach 2 - by using command',()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        cy.getIframe('#mce_0_ifr').clear().type("Welcome Gabriel {ctrl+a}")

            cy.get("button[title='Bold']").click()
    
    })
    
    it('Approach 2 - by using iframe plugin',()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')
    
        cy.frameLoaded('#mce_0_ifr'); // Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome Gabriel {ctrl+a}")

        cy.get("button[title='Bold']").click()
      
    
    })
})         
    