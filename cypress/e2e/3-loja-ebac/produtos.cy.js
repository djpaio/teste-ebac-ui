///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('#content')
            .contains('Aero Daily Fitness Tee')
            .click()
            cy.get('#tab-title-description').should('contain', 'Descrição')

    });
});