import paginaAutenticar from '../support/pageObjects/paginaAutenticar';
import navegarHome from '../support/pageObjects/navegarHome';
const usuario = require('../fixtures/usuario.json')

describe('Funcionalidades na Home', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            Cypress.log()
            return false
        })
        cy.visit('https://www.saucedemo.com/v1/index.html')
        paginaAutenticar.preencherId(usuario.standard_user.id)
        paginaAutenticar.preencherSenha(usuario.standard_user.senha)
        paginaAutenticar.acionarOpcaoParaLogar()

    });

    it('Imagem 0 visivel', () => {
        navegarHome.imgVisible0()
    }); //Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

    it('Imagem 1 visivel', () => {
        navegarHome.imgVisible1()
    });//Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

    it('Imagem 2 visivel', () => {
        navegarHome.imgVisible2()
    });//Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

    it('Imagem 3 visivel', () => {
        navegarHome.imgVisible3()
    });//Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

    it('Imagem 4 visivel', () => {
        navegarHome.imgVisible4()
    });//Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

    it('Imagem 5 visivel', () => {
        navegarHome.imgVisible5()
    });//Teste do carregamento da imagem verificando a width da imagem q só aparece após a imagem ser carregada

});