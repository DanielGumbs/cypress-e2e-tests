describe('Login Out', () => {
    it('click on a match', () => {
        cy.visit('http://localhost:3000/matches');
        cy.wait(1000)
        cy.contains('button', '12-9').click();
        cy.wait(1000)
        cy.screenshot('after_click_on_date');
        cy.contains('a', 'Manchester City').click();
        cy.wait(1000)
        cy.screenshot('after_click_on_match');
    });
});
