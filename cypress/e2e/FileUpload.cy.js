import 'cypress-file-upload'
describe("File uploads", ()  => {

    it("Signle File Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('billet.png')
        cy.get('#file-submit').click()
        cy.wait(3000)

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')


    })

    it("File upload - Rename ", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'sql.jpeg', filename:'myfile.png'})
        cy.get('#file-submit').click()
        cy.wait(3000)

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

     
    })

    it("File upload - Drag and drop", () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('billet.png',{subjectType: 'drag-n-drop'});

        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("billet.png")
       

      
    } )

    it("Multiple files Upload", () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
 
        cy.get('#filesToUpload').attachFile(["billet.png","sql.jpeg"])
        
        cy.wait(3000)

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected')

      
    })

    it.only("File upload - Shadow Dom", () => {


        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("billet.png")
        cy.wait(3000)

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('billet.png')
    })
  })



