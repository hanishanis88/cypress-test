import'cypress-file-upload'

describe('File Uploads', ()=>{

    it('Single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('[class="example"] h3').should('have.text', 'File Uploaded!')
    })

    it('File upload - Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'test1.pdf', fileName:'change name'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('[class="example"] h3').should('have.text', 'File Uploaded!')
    })

    it('File upload - Drag and Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.pdf', {subjectType: 'drag-n-drop'})
        cy.wait(5000)
        cy.get('[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] div[class="dz-details"] span').contains('test1.pdf')
    })

    it('Multiple file upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.pdf', 'test2.pdf'])
        cy.wait(3000)
        cy.get('#fileList>li').should('have.length', '2')
    })

    it.only('File upload - Shadow Dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('test1.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('test1.pdf')
    })






})