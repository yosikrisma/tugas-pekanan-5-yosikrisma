describe('Add new users', ()=>{
    it('Open Apps', () => {
        Cypress.config('baseUrl');
  
        cy.visit('/');

        cy.get('#email').type('yosikr03@gmail.com');

        cy.get('#password').type('P@ssw0rd');

        cy.get('.chakra-button').click();

        cy.contains('kasirAja');

        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(8) > div > div > div').click({multiple: true});

        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click();

        cy.get('#nama').type('User1');

        cy.get('#email').type('user1@example.com');

        cy.get('#password').type('123Qwe!');

        cy.get('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click();
    })
})