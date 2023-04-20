describe("handle tables", ()  => {

    beforeEach('Login', ()  => {

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get("[name='username']").type('demo')
        cy.get("[name='password']").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()

        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    
    })


    it("Check Number Rows & Columns", () => {
    
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    }) 


    it("Check cell data from specific row & Column", () => {
    
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com')

    }) 


    it.only("Read all the rows & Columns data in the first page", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each( () => {

    
    }) 


    it("Pagination", () => {
    
    }) 


})   
 })


