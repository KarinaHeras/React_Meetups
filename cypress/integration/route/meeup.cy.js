describe('test favorites route', () => {
    
    before(() => cy.visit('/'));

    it('Tests of route testing', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > a').click();
        cy.get(':nth-child(2) > a').click();
        cy.get(':nth-child(3) > a').click();
        cy.get(':nth-child(2) > a').click();
        cy.get(':nth-child(1) > a').click();
        cy.get(':nth-child(1) > .Card_card__p9wzB > .MeetupItems_actions__cXKkA > [data-test="orderModuleHeaderButton"]').click();
        cy.get(':nth-child(2) > .Card_card__p9wzB > .MeetupItems_actions__cXKkA > [data-test="orderModuleHeaderButton"]').click();
        cy.get(':nth-child(3) > .Card_card__p9wzB > .MeetupItems_actions__cXKkA > [data-test="orderModuleHeaderButton"]').click();
        cy.get(':nth-child(3) > a').click();
        cy.get(':nth-child(1) > a').click();
        cy.get(':nth-child(2) > a').click();
        cy.get('.MainNavigation_logo__XoPXy').click();
        /* ==== End Cypress Studio ==== */
    })

   
})