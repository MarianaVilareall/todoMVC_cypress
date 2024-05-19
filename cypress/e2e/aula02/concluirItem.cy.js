import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Concluir Itens na minha lista de toDo', () => {

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Morango"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)

        })
    })

    it('Concluir Item da lista toDO', () => {
        telaInicial.concluirItem()
        
        
    });
});

