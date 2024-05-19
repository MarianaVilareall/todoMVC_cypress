import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Validar os filtros da aplicação após adição de itens', () => {

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Morango"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)

        })

        telaInicial.concluirItem()
    })

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
    });
 
    it('Filtrar itens concluidos', () => {
        


    });

});
