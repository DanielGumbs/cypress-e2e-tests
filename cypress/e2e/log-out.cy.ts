describe('Login Out', () => {
  it('Log Out', () => {
    cy.visit('http://localhost:3000/matches');
    cy.contains('button', 'Sign Out').click();
    cy.wait(800)
    cy.screenshot('after_logged_out');
  });
});
