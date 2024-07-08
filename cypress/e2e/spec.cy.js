/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Francisco')
    cy.get('#signup-lastname').type('Garroni')
    cy.get('#signup-email').type('francisco@teste.com')
    cy.get('#signup-phone').type('51999999999')
    cy.get('#signup-password').type('Teste@1010')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})