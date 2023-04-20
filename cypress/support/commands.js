
/// <reference types="Cypress" />
 

   require('@cypress/xpath');  
/// <reference types="cypress-xpath" />


Cypress.Commands.add('getIframe', (iframe)=>{
 

  // Cette ligne sélectionne l'élément de la page avec l'ID "#mce_0_ifr" et stocke une référence à cet élément dans la variable "iframe".
   return cy.get("#mce_0_ifr")

  // Cette ligne récupère l'élément "body" du contenu de l'iframe et retourne une référence à cet élément.
  .its('0.contentDocument.body')

  // Cette ligne vérifie que l'élément "body" est visible dans la page.
  .should('be.visible')

  // Cette ligne enroule l'élément "body" dans un objet Cypress pour permettre des opérations supplémentaires.
  .then(cy.wrap);

})
 
Cypress.Commands.add('clickLink',(label)=>{
  cy.get('a').contains(label).click()

})


//custom command for clicking on link using label


//over wirte contains()
   /*
Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=>{

  //determine if a filter argument was passed   (case sensivity)
    if (typeof text === 'object') {
    
        options = text
        text = filter
        filter = undefined
    }

      options.matchCase = false

      return originalFn(subject, filter, text, options)
})*/
//Custom commanf for login

Cypress.Commands.add("loginapp",(email,password)=>{

  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get("button[class='button-1 login-button']").click()

})













/// const cypress = require
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// 