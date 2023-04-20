describe("handle dropdowns", ()  => {

    it.skip("Dropdown With select", () => {

         cy.visit('https://practice.expandtesting.com/dropdown/')
   
         // select simple drop downs
         cy.get('#dropdown')
         .select('1')
         .should('have.value','1')
         
    })

    it.skip("dropdown Without select", () => {

     cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

     // select simple drop downs
     cy.get('#select2-billing_country-container').click()

     cy.get('.select2-search__field').type('Italy').type('{enter}')
     
     cy.get('#select2-billing_country-container').should('have.text','Italy')
     
})

     it.skip("Auto suggest dropdown", () => {

       cy.visit('https://www.wikipedia.org/')

         // select simple drop downs
       cy.get('#searchInput').type('Paris')

        cy.get('.suggestion-title').contains("Paris").click()
     
      
})
it("Dynamic dropdown", () => {

     cy.visit('https://www.google.com/')

     // select drop downs

     cy.get("button[id='L2AGLb'] div[role='none']").click()

     cy.get("textarea[name='q']").type("paris meteo")

     cy.wait(3000)

      cy.get("div.wM6W7d>span").should('have.length',12)
     // 
     cy.get("div.wM6W7d>span").each( ($el, index,$list)=>{

          if($el.text()=='paris meteo')

          {
               cy.wrap($el).click()

          }
     cy.get("textarea[name='q']").should('have.value','paris meteo') 

     })
     
   
     
})
 })
