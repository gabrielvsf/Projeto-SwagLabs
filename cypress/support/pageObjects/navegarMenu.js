class NavegarMenu{
    logout(){
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
    }//Logout do sistema pelo menu

    returnHome(){
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()
    }//Voltar a home pelo menu

    checkLogin(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
    }//Checa se o teste se encontra na Homepage
}

export default new NavegarMenu()