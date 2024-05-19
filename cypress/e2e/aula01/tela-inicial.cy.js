
import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Acessando a página ToDoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es5/dist/')
    telaInicial.inputText()
  })
})
