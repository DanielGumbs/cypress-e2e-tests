describe('Login Form', () => {
  it('Fills in the email and password inputs and clicks Sign In', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="email"]').type('test123@gmail.com');
    cy.get('input[name="password"]').type('123');
    cy.screenshot('filled_form');
    cy.get('button').first().click();
    cy.wait(800)
    cy.screenshot('logged_in');
  });
});
