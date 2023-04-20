//before
//after
//beforeEach
//AfterEach

 
describe('My TestSuite', ()=> {
   
    before(()=> {
        cy.log("*********   Lunch app     ************")
    })


    after(()=> {
        cy.log("*********   Close app        ************")
    })

    afterEach(()=> {
        cy.log("*********    login     ************")
    })
    beforeEach(()=> {
        cy.log("*********   logout     ************")
    })


    it('Search',()=> {

        cy.log("*********        ************")

    })


    it('Advanced Search',()=> {
        cy.log("*********        ************")
    })
    
    it('listing Product',()=> {

        cy.log("*********        ************")
    
    })

   
})         
    