describe('Login Form', () => {
    it('Clicks on a favorite matches', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name="email"]').type('test123@gmail.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').first().click();
        cy.wait(1000)
        cy.contains('button', '12-9').click();
        cy.contains('a', 'Manchester City').click();
        cy.screenshot('after_click_on_favorite_match');
    });
});
