class NavegarCarrinho{
    checkout(){
        cy.get('.btn_action').click()
    }//Checkout das compras

    returnHomeFromCart(){
        cy.get('.btn_secondary').click()
    }//Voltar a home pelo carrinho

    cancelCheckout(){
        cy.get('.cart_cancel_link').click()
    }//Cancelar checkout no carrinho

    continueCheckout(){
        cy.get('.btn_primary').click()
    }//Continuar o Checkout

    finishCheckout(){
        cy.get('.btn_action').click()
    }//Finalizar o Checkout

    preencherFirstName(nome){
        cy.get('[data-test="firstName"]').type(nome)
    } //Preenchimento do campo First Name

    preencherLastName(sobrenome){
        cy.get('[data-test="lastName"]').type(sobrenome)
    }//Preenchimento do campo Last Name

    preencherPostalCode(cep){
        cy.get('[data-test="postalCode"]').type(cep)
    }//Preenchimento do campo PostalCode

    removeProduct1(){
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 1 produto da lista ao carrinho

    removeProduct2(){
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 2 produto da lista ao carrinho

    removeProduct3(){
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 3 produto da lista ao carrinho

    removeProduct4(){
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 4 produto da lista ao carrinho

    removeProduct5(){
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 5 produto da lista ao carrinho

    removeProduct6(){
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    }//Remover o 6 produto da lista ao carrinho

    removeSingleProduct(){
        cy.get('.item_pricebar > .btn_secondary').click()
    }//Remover produto unico do carrinho

    checkCart(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')
    }//Checa se o teste se encontra no carrinho

    checkCheckout2(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html')
    }//Checa se o teste se encontra na segunda etapa do checkout

    checkCheckoutComplete(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')
    }//Checa se o teste se encontra na etapa de checkout completo

    mensagemErro(){
        return cy.get('[data-test="error"]')
    }//Retorna a mensagem de erro

}

export default new NavegarCarrinho()