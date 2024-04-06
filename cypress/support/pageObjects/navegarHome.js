class NavegarHome{
    logout(){
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
    }

    enterCart(){
        cy.get('.svg-inline--fa').click()
    }//Entra no carrinho pela home

    addProduct1(){
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    }//Adicionar o 1 produto na lista ao carrinho

    addProduct2(){
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    }//Adicionar o 2 produto na lista ao carrinho

    addProduct3(){
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    }//Adicionar o 3 produto na lista ao carrinho

    addProduct4(){
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    }//Adicionar o 4 produto na lista ao carrinho

    addProduct5(){
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
    }//Adicionar o 5 produto na lista ao carrinho

    addProduct6(){
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
    }//Adicionar o 6 produto na lista ao carrinho

    removeProduct1(){
        cy.get(':nth-child(1) > .pricebar > .btn_secondary').click()
    }//Remover o 1 produto da lista ao carrinho

    removeProduct2(){
        cy.get(':nth-child(2) > .pricebar > .btn_secondary').click()
    }//Remover o 2 produto da lista ao carrinho

    removeProduct3(){
        cy.get(':nth-child(3) > .pricebar > .btn_secondary').click()
    }//Remover o 3 produto da lista ao carrinho

    removeProduct4(){
        cy.get(':nth-child(4) > .pricebar > .btn_secondary').click()
    }//Remover o 4 produto da lista ao carrinho

    removeProduct5(){
        cy.get(':nth-child(5) > .pricebar > .btn_secondary').click()
    }//Remover o 5 produto da lista ao carrinho

    removeProduct6(){
        cy.get(':nth-child(6) > .pricebar > .btn_secondary').click()
    }//Remover o 6 produto da lista ao carrinho

    removeSingleProduct(){
        cy.get('.btn_secondary').click()
    }//Remover produto unico do carrinho

    qtdItemHome(){
        return cy.get('.fa-layers-counter')
    }//Retorna a quantidade de itens no carrinho visto pela home

    imgVisible0(){
        cy.get('#item_0_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    imgVisible1(){
        cy.get('#item_1_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    imgVisible2(){
        cy.get('#item_2_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    imgVisible3(){
        cy.get('#item_3_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    imgVisible4(){
        cy.get('#item_4_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    imgVisible5(){
        cy.get('#item_5_img_link > .inventory_item_img').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    }//Checa se a imagem esta visivel

    sortAZ(){
        cy.get('.product_sort_container').select(0)
    }//Organiza em ordem alfabetica crescente

    sortZA(){
        cy.get('.product_sort_container').select(1)
    }//Organiza em ordem alfabetica decrescente

    sortMinMax(){
        cy.get('.product_sort_container').select(2)
    }//Organiza em ordem crescente

    sortMaxMin(){
        cy.get('.product_sort_container').select(3)
    }//Organiza em ordem decrescente

    checkHome(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    }//Checa se o teste se encontra na Homepage

}

export default new NavegarHome()