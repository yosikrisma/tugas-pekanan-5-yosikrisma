describe('Add new category', ()=>{
    it('Open Apps', () => {
        Cypress.config('baseUrl');
  
        cy.visit('/');

        cy.get('#email').type('yosikr03@gmail.com');

        cy.get('#password').type('P@ssw0rd');

        cy.get('.chakra-button').click();

        cy.contains('kasirAja');

        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click({ multiple: true });

        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click();

        cy.get('#nama').type('Kesehatan');

        cy.get('#deskripsi').type('Kategori kesehatan');

        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click();

    })
})