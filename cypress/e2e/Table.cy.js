describe('handle tables', ()=>{
    beforeEach('Login', ()=>{
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('[type="submit"]').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click() //customer main menu
        cy.get('#menu-customer>ul>li:first-child').click() //customer child menu

    })

    it('checks number rows and column', ()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length', '10')
        cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length', '7')
    })

    it('checks cell data from specific row', ()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(4)>td:nth-child(3)').contains( 'gorankrezic90@gmail.com')
    })

    it('read all rows and column data in first page', ()=>{
       cy.get('.table.table-bordered.table-hover>tbody>tr')
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols)=>{
                        cy.log($col.text())
                    })
                })
        })
    })

    it.only('pagination', ()=>{
        
        //find total number of pages

        //declare created var
        // let totalPages
       
        // cy.get('.col-sm-6.text-end').then((e)=>{
        //    let mytext=e.text() //get this line -- Showing 1 to 10 of 12641 (1265 Pages)
        //     totalPages=mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1)
        //     cy.log('Total number of pages in a table =>'+totalPages)
        // })

        let totalPages =5

        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1){
                cy.log('Active page is =>'+p)

                cy.get('.pagination>li:nth-child('+p+')').click()

                cy.get('.table.table-bordered.table-hover>tbody>tr')
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())
                        })
                    })
                 })
            }       
        }
    })
})
