import signin from "../fixtures/signin.json";
describe('რეგისტრაცია', () => {
  it('passes', () => {
    cy.visit('https://www.barron.ge/ka/')
    cy.get('.user-int > .user > img').should("be.visible").click()
    cy.get('.go-to-sign-up').should("have.text", "რეგისტრაცია").click({ force: true })
    cy.get('#sign-up-name').type(signin.name).should("have.value", "giorgi")
    cy.get('#sign-up-surname').type(signin.surname).should("have.value", signin.surname)
    cy.get('#sign-up-mobile').type(signin.mobile).should("have.value", signin.mobile)
    cy.get('#sign-up-email').type(signin.email).should("have.value", signin.email)
    cy.get('#sign-up-password').type(signin.password).should("have.value", signin.password)
    cy.get('#sign-up-repeat-password')
    cy.get(".checkbox [type='checkbox']").check({ force: true }).should('be.checked')
    cy.get('.sign-in-form > button').click({ force: true })
  })
})

describe('ავტორიზაცია', () => {
  it('passes', () => {
    cy.visit('https://www.barron.ge/ka/')
    cy.get('.user-int > .user > img').should("be.visible").click()
    cy.get('#sogn-in-email').type(signin.email)
    cy.get('#password').type(signin.password)
    cy.get('.sign-in-form > button').click()
    cy.itsloggedin()
  })
})

describe('კალათაში პროდუქტის დამატება', () => {
  it('passes', () => {
    cy.login(signin.email, signin.password)
    cy.get('.swiper-slide-next > .collection-item-desc > .collection-item-desc-top > a > h5').click({ force: true })
    cy.get('.product-description > .nice-select').click({ force: true })
    cy.get('[data-value="11"]').should("have.text", "თეთრი ოქრო").click({ force: true })
    cy.get('.add-to-cart> img').should("be.visible").click({ force: true })
    cy.get('.add-to-cart').should("have.text", "პროდუქტი კალათაშია")
  })
})


describe('პროდუქტის შეძენა', () => {
  it('passes', () => {
    cy.login('giorgigakharia987@gmail.com', 'giorgi123456')
    cy.get('.burger').click()
    cy.get(".burger-wrapper").find(".d-flex-between").eq(1).click()
    cy.get('a[href="https://www.barron.ge/ka/category/jewellery/rings"]').click({ force: true })
    cy.get('.swiper-slide-active > .collection-item-desc > .collection-item-desc-top > a > h5').click({ force: true })
    cy.get('.nice-select.size-chart-select').find('[data-value="14"]').click({ force: true })
    cy.get('[data-value="11"]').click({ force: true })
    cy.get('.add-to-cart').click({ force: true })
    cy.get('.add-to-cart').should("have.text", "პროდუქტი კალათაშია")
    cy.get('.shop-bag > img').click()
    cy.get('#cart-address').click({ force: true }).type("Tbilisi")
    cy.get('#visa').click({ force: true })
  })
})


describe('რჩეული პროდუქტები', () => {
  it('პროდუქტის დამატება', () => {
    cy.login('giorgigakharia987@gmail.com', 'giorgi123456')
    cy.search("ოქროს ბეჭედი ბრილიანტებით")
    cy.get(".products-list").should("be.visible")
    cy.get('a[href="https://www.barron.ge/ka/product/91-diamond-ring"]').first().should("be.visible").click()
    cy.get('.product-title-block > .add-to-fav > img').should("exist").click()
    
    
  })

  it('პროდუქტების ამოშლა', () => {
    cy.login('giorgigakharia987@gmail.com', 'giorgi123456')
    cy.get('.fav > img').should("be.visible").click()
    cy.get('.remove-all-favs').should("contain", "რჩეული პროდუქტების გასუფთავება").click({ force: true })
    cy.get('.clear-all').should("have.text", "დიახ").click()
    cy.get('.password-reset-send-message').should("have.text", "თქვენ არ გაქვთ რჩეული პროდუქტები")
    
    
  })
})

