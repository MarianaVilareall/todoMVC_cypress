import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Deletar itens da lista', () => {

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Morango"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)

        })

        telaInicial.concluirItem()
    })
    
    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
    });

});
 