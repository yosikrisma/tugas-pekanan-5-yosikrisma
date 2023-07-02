describe('Login valid data', ()=>{
    it('Open Apps', () => {
        Cypress.config('baseUrl');
  
        cy.visit('/');

        cy.get('#email').type('yosikr03@gmail.com');

        cy.get('#password').type('P@ssw0rd');

        cy.get('.chakra-button').click();

        cy.contains('kasirAja');
    })
})