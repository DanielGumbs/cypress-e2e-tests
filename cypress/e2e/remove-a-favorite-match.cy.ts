describe('Login Form', () => {
    it('Clicks on a favorite matches', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name="email"]').type('test123@gmail.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').first().click();
        cy.wait(1000)
        cy.contains('button', '12-9').click();
        cy.screenshot('before-remove-a-favorite');
        cy.get('img[src="/favorite-1.svg"]').closest('button').first().click();
        cy.contains('button', '12-9').click();
        cy.screenshot('after-remove-a-favorite');
    });
});
