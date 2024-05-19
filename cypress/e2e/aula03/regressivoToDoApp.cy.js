import telaInicial from "../../support/pageObjects/tela-inicial.page";

describe('Regressivo ToDo App', () => {

    context('Validar a tela inicial', () => {
        beforeEach(() => { 
            cy.visit('/')
        
    });

    it('Validar área label de input de dados', () => {
        telaInicial.validarInput("What needs to be done?")
        
    });

})

    context('Validar adição de itens', () => {
       beforeEach(() => {
        cy.visit('/')
       });
    
        it('Adicionar mais de um item da lista', () => {

            var todoItens = ["Maçã", "Banana","Morango" ]
           
            todoItens.forEach(function(item, indice, array ){
                telaInicial.inputText(item)
            })

            telaInicial.validarContador(3)
                
            });



    })

    context('Validar filtro da aplicação', () => {

        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Morango"]
            
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
    
            })
            
            it('Concluir item da lista toDo', () => {
                telaInicial.concluirItem()

           
        });
    
        it('Validar lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)

        });

    })
    
    context.skip('Validar remoção de itens', () => {

    })
});

});