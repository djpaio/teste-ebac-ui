///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it.only('Deve fazer login com sucesso', () => {
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
    
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, deividpaio_teste (não é deividpaio_teste? Sair)')
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, deividpaio_teste (não é deividpaio_teste? Sair)')
        })
    })

    it('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login('deividpaio_teste@gmail.com', 'djp001')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, deividpaio_teste (não é deividpaio_teste? Sair)')
    })

})