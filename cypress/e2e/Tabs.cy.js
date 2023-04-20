describe("handle tabs", ()  => {

 // Cette ligne de code est un autre appel de méthode qui décrit une approche spécifique pour tester le comportement décrit dans le bloc "describe".
it("Approche 1", () => {

    // Cette ligne de code ouvre un site Web dans le navigateur pour le tester.
    cy.visit('https://the-internet.herokuapp.com/windows')
       
       // Cette ligne de code recherche une balise "a" avec un attribut "href" qui équivaut à '/windows/new', supprime l'attribut "target" et clique dessus pour l'ouvrir dans la même fenetre.
       cy.get("a[href='/windows/new']").invoke('removeAttr','target')
       .click()

       cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

       // back to parent tab
       cy.go('back')
    }) 

    it.only("Approche 1", () => {

        // Cette ligne de code ouvre un site Web dans le navigateur pour le tester.
        cy.visit('https://the-internet.herokuapp.com/windows')
           
           // Cette ligne de code recherche une balise "a" avec un attribut "href" qui équivaut à '/windows/new', supprime l'attribut "target" et clique dessus pour l'ouvrir dans la même fenetre.
           cy.get("a[href='/windows/new']").then((e)=> {

            let url=e.prop('href');

            cy.visit(url)
        
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

            // back to parent tab
            cy.go('back')
        
        })
        }) 
        
    
})
