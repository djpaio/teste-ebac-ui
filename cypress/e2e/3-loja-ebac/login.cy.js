///<reference types="cypress"/>

describe('Funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('deividpaio_teste@gmail.com')
        cy.get('#password').type('djp001')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, deividpaio_teste (não é deividpaio_teste? Sair)')
    })

})