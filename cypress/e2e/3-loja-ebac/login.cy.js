///<reference types="cypress"/>

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('deividpaio_teste@gmail.com')
        cy.get('#password').type('djp001')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, deividpaio_teste (não é deividpaio_teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('deividpaio_testeerro@gmail.com')
        cy.get('#password').type('djp001')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
            cy.get('#username').type('deividpaio_teste@gmail.com')
            cy.get('#password').type('djp001erro')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail deividpaio_teste@gmail.com está incorreta.')
            cy.get('.woocommerce-error > li').should('exist')
    });

})