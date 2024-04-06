import paginaAutenticar from '../support/pageObjects/paginaAutenticar';
import navegarHome from '../support/pageObjects/navegarHome';
import navegarCarrinho from '../support/pageObjects/navegarCarrinho';
const usuario = require('../fixtures/usuario.json')
const erro = require('../fixtures/assertions.json')

describe('Funcionalidades Carrinho', () => {

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

    it('Ir ao carrinho', () => {
        navegarHome.enterCart()
        navegarCarrinho.checkCart()
    });// teste de entrada no carrinho verificando se o teste se encontra na pagina do carrinho ao fim

    it('Sair do carrinho', () => {
        navegarHome.enterCart()
        navegarCarrinho.returnHomeFromCart()
        navegarHome.checkHome()
    });// teste de saida do carrinho verificando se o teste se encontra na home ao fim

    it('Adicionar produto na home', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.addProduct2()
        navegarHome.qtdItemHome().should('contain', 2)
        navegarHome.addProduct3()
        navegarHome.qtdItemHome().should('contain', 3)
        navegarHome.addProduct4()
        navegarHome.qtdItemHome().should('contain', 4)
        navegarHome.addProduct5()
        navegarHome.qtdItemHome().should('contain', 5)
        navegarHome.addProduct6()
        navegarHome.qtdItemHome().should('contain', 6)
    }); // Teste da adição de produtos pela home checando o funcionamento da contagem do carrinho
    it('Retirar produto na home', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.addProduct2()
        navegarHome.qtdItemHome().should('contain', 2)
        navegarHome.removeProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
    }); // Teste da remoção de produtos pela home checando o funcionamento da contagem do carrinho

    it('Retirar produto no carrinho', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.addProduct2()
        navegarHome.qtdItemHome().should('contain', 2)
        navegarHome.enterCart()
        navegarCarrinho.removeProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
    });// Teste da remoção de produtos pelo carrinho checando o funcionamento da contagem do carrinho

    it('Checkout HAPPYDAY', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.preencherFirstName(usuario.buying_user.nome)
        navegarCarrinho.preencherLastName(usuario.buying_user.sobrenome)
        navegarCarrinho.preencherPostalCode(usuario.buying_user.postalcode)
        navegarCarrinho.continueCheckout()
        navegarCarrinho.checkCheckout2()
        navegarCarrinho.finishCheckout()
        navegarCarrinho.checkCheckoutComplete()
    });//Teste de um checkout bem sucedido preenchendo tudo como deveria.

    it('Checkout sem nome', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.continueCheckout()
        navegarCarrinho.mensagemErro().should('contain', erro.erroCompras.nomeNaoPreenchido)
    });// Teste de um checkout sem prencher os campos na etapa 1

    it('Checkout sem sobrenome', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.preencherFirstName(usuario.buying_user.nome)
        navegarCarrinho.continueCheckout()
        navegarCarrinho.mensagemErro().should('contain', erro.erroCompras.sobrenomeNaoPreenchido)
    }); // Teste de um checkout sem prencher os campos last name e postal code na etapa 1

    it('Checkout sem postal code', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.preencherFirstName(usuario.buying_user.nome)
        navegarCarrinho.preencherLastName(usuario.buying_user.sobrenome)
        navegarCarrinho.continueCheckout()
        navegarCarrinho.mensagemErro().should('contain', erro.erroCompras.postalcodeNaoPreenchido)
    }); // Teste de um checkout sem prencher o campo postal code na etapa 1

    it('Checkout cancelado na etapa 1', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.cancelCheckout()
        navegarCarrinho.checkCart()
    }); // Teste de checkout desistindo na etapa 1 e checando se o mesmo volta ao carrinho

    it('Checkout cancelado na etapa 2', () => {
        navegarHome.addProduct1()
        navegarHome.qtdItemHome().should('contain', 1)
        navegarHome.enterCart()
        navegarCarrinho.checkout()
        navegarCarrinho.preencherFirstName(usuario.buying_user.nome)
        navegarCarrinho.preencherLastName(usuario.buying_user.sobrenome)
        navegarCarrinho.preencherPostalCode(usuario.buying_user.postalcode)
        navegarCarrinho.continueCheckout()
        navegarCarrinho.cancelCheckout()
        navegarHome.checkHome()
    }); // Teste de checkout desistindo na etapa 2 verificando se o mesmo volta a home

});