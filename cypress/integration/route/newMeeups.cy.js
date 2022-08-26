describe('test favorites route', () => {
    
    before(() => cy.visit('/new-meetup'));

   it('Testing the button create new meetup ', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#title').clear();
    cy.get('#title').type('My new meetup ');
    cy.get('#image').click();
    cy.get('#image').click();
    cy.get('#image').clear();
    cy.get('#image').type('https://www.sitiosdeespana.es/articulo/los-25-monumentos-mas-importantes-de-espana');
    cy.get('#address').clear();
    cy.get('#address').type('user12345@gmail.com');
    cy.get('#description').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('button').click();
    cy.get('button').click();
    cy.get('#description').click();
    cy.get('button').click();
    cy.get(':nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
   })
     
})