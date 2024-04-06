class PaginaAutenticar{
    preencherId(id){
        cy.get('[data-test="username"]').type(id)
    } //Preenchimento do campo ID

    preencherSenha(senha){
        cy.get('[data-test="password"]').type(senha)
    }//Preenchimento do campo Senha

    acionarOpcaoParaLogar(){
        cy.get('#login-button').click()
    }// Clicar no botão de login

    mensagemErro(){
        return cy.get('[data-test="error"]')
    }//Retorna a mensagem de erro
}

export default new PaginaAutenticar()