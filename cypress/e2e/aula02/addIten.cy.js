import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Adicionar Itens na minha lista de To Do', () => {

    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
    telaInicial.inputText("dado")

    })

    it('Adicionar mais de um item da lista', () => {

        var todoItens = ["Maçã", "Banana","Morango" ]
       
        todoItens.forEach(function(item, indice, array ){
            telaInicial.inputText(item)
        })
            
        });

    });





