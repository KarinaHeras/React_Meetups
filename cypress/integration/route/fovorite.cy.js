describe('test favorites route', () => {
    
    before(() => cy.visit('/'));

    it('should be able add to favorites', () => {
        cy.get(':nth-child(1) > .Card_card_j4hLE > .MeetupItems_actions_1Fl4D > [data-test="orderModuleHeaderButton"]')
            .click();
        cy.get(':nth-child(2) > .Card_card_j4hLE > .MeetupItems_actions_1Fl4D > [data-test="orderModuleHeaderButton"]')
            .click();
        cy.get(':nth-child(3) > a')
            .click();
    })

    it('should be able to delete of favorites', () => {
        cy.get('.MeetupItems_actions__1Fl4D')
            .contains('Remove From Favorite')
            .click()
        cy.get(' .MainNavigation_badge__-YzNg')
            .contains(1)
    })
     
})