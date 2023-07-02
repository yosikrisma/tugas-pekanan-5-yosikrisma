describe('Add new category', ()=>{
    it('Open Apps', () => {
        Cypress.config('baseUrl');
  
        cy.visit('/');

        cy.get('#email').type('yosikr03@gmail.com');

        cy.get('#password').type('P@ssw0rd');

        cy.get('.chakra-button').click();

        cy.contains('kasirAja');

        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click({ multiple: true });

        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div > input').type('kesehatan');

        cy.get('#menu-button-23').click();

        cy.contains('hapus').click({ multiple: true });

        cy.get('#chakra-modal-25 > footer > button.chakra-button.css-n45e6f').click();

    })
})