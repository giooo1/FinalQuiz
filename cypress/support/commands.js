Cypress.Commands.add('login', (useremail, userpassword) => { 
    cy.visit('https://www.barron.ge/ka/')
    cy.get('.user-int > .user > img').should("be.visible").click()
    cy.get('#sogn-in-email').type(useremail)
    cy.get('#password').type(userpassword)
    cy.get('.sign-in-form > button').click()
 })

 Cypress.Commands.add('itsloggedin', () =>{
    cy.get('.user-int > .user > img').should("be.visible").click()
    cy.get(".profile-page-top").should("exist")
 })

 Cypress.Commands.add('search', (newItem) =>{
   cy.visit('https://www.barron.ge/ka/')
    cy.get('.search > .open-search-form').click()
    cy.get('.mobile > .search-form > [type="text"]').type(`${newItem}{enter}`)
})
