describe('Login Form', () => {
    it('Clicks on a favorite matches', () => {
        cy.visit('http://localhost:3000/matches');
        cy.contains('button', '12-9').click();
        cy.wait(1000)
        cy.screenshot('before_switch_date');
        cy.reload()
        cy.contains('button', '11-9').click();
        cy.wait(1000)
        cy.screenshot('after_first_switch_date');
        cy.contains('button', '12-9').click();
        cy.wait(1000)
        cy.screenshot('after_last_switch_date');
    });
});
