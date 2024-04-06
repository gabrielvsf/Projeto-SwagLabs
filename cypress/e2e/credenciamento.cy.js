import paginaAutenticar from '../support/pageObjects/paginaAutenticar';
import navegarHome from '../support/pageObjects/navegarHome';
import navegarMenu from '../support/pageObjects/navegarMenu';
const usuario = require('../fixtures/usuario.json')
const erro = require('../fixtures/assertions.json')

describe('Funcionalidades Credenciamento', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            Cypress.log()
            return false
        })
        cy.visit('https://www.saucedemo.com/v1/index.html')

    });//Codigo de preparação do ambiente antes de cada teste

    it('Login HAPPY DAY', () => {
        paginaAutenticar.preencherId(usuario.standard_user.id)
        paginaAutenticar.preencherSenha(usuario.standard_user.senha)
        paginaAutenticar.acionarOpcaoParaLogar()
        navegarHome.checkHome()
    });// Teste do caminho feliz de login bem sucedido, a automatização se da pelo preenchimento dos campos, seguida pelo uso do botão de login para por fim checar se o link onde o programa se encontra é o da home.

    it('Logout HAPPY DAY', () => {
        paginaAutenticar.preencherId(usuario.standard_user.id)
        paginaAutenticar.preencherSenha(usuario.standard_user.senha)
        paginaAutenticar.acionarOpcaoParaLogar()
        navegarHome.checkHome()
        navegarMenu.logout()
        navegarMenu.checkLogin()
    });// Teste do caminho feliz de logout bem sucedido, a automatização se da pelo preenchimento dos campos, seguida pelo uso do botão de login, desloga via menu e checa se esta na pagina de login.

    it('Login usuário bloqueado', () => {
        paginaAutenticar.preencherId(usuario.locked_out_user.id)
        paginaAutenticar.preencherSenha(usuario.locked_out_user.senha)
        paginaAutenticar.acionarOpcaoParaLogar()
        paginaAutenticar.mensagemErro().should('contain', erro.erroAutenticar.userBloqueado)
    });// Teste do erro de usuário bloqueado, a automatização se da pelo preenchimento dos campos, seguida pelo uso de botão de login e então a checagem do erro gerado pelo sistema.

    it('Login sem ID', () => {
        paginaAutenticar.acionarOpcaoParaLogar()
        paginaAutenticar.mensagemErro().should('contain', erro.erroAutenticar.userNaoPreenchido)
    });// Teste do erro de login sem ID preenchido, a automatização se da pela clicagem direta do botão de login e verificação do erro apresentado.

    it('Login sem Senha', () => {
        paginaAutenticar.preencherId(usuario.standard_user.id)
        paginaAutenticar.acionarOpcaoParaLogar()
        paginaAutenticar.mensagemErro().should('contain', erro.erroAutenticar.senhaNaoPreenchida)
    });// Teste do erro de login sem senha preenchida, a automatização se da pelo preenchimento de um dos campos deixando o outro em branco seguida pelo clique do botão de login e verificação do erro apresentado.

    it('Login senha incorreta', () => {
        paginaAutenticar.preencherId(usuario.wrong_informations.id)
        paginaAutenticar.preencherSenha(usuario.wrong_informations.senha)
        paginaAutenticar.acionarOpcaoParaLogar()
        paginaAutenticar.mensagemErro().should('contain', erro.erroAutenticar.senhaOuUserInvalido)
    });// Teste do erro de login com usuario e/ou senhas invalidos

});