describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("verify page contain title and description", () => {
    cy.get("[data-testeid=title]")
    cy.get("[data-testeid=description]")
    cy.get("[data-testeid=login-tab]")
  })
  it("simulate user login", () => {
    cy.get("[data-testeid=login-tab]").click()
    cy.get("[data-testeid=email-input]").type("vanessa@mail.com")
    cy.get("[data-testeid=password-input]").type("43752Nessa")
    cy.get("[data-testeid=login-submit-btn]").click()
  })
})
