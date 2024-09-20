describe('Switch League', () => {
    it('Should select another league and display its standings', () => {
        cy.visit('http://localhost:3000/matches');
        cy.wait(1500)
        cy.screenshot('before_switch_league');
        cy.get('#leagueDropdown').select('bl2');
        cy.get('tbody tr').should('have.length.gt', 0);
        cy.wait(1500)
        cy.screenshot('after_switch_league');
        cy.get('#leagueDropdown').select('bl1');
        cy.get('tbody tr').should('have.length.gt', 0);
        cy.screenshot('standings');
    });
});
