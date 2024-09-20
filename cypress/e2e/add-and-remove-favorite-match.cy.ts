describe('Login Form', () => {
    it('Clicks on a favorite matches', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name="email"]').type('test123@gmail.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').first().click();
        cy.wait(1000)
        cy.contains('button', '12-9').click();
        cy.screenshot('before_add_a_favorite-2');
        cy.get('img[alt="favorite"]').closest('button').first().click();
        cy.reload()
        cy.contains('button', '12-9').click();
        cy.screenshot('after_add_a_favorite-2');
        cy.screenshot('before-remove-a-favorite-2');
        cy.get('img[src="/favorite-1.svg"]').closest('button').first().click();
        cy.contains('button', '12-9').click();
        cy.screenshot('after-remove-a-favorite-2');
    });
});
