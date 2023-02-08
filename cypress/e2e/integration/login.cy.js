describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("submit a login form", () => {
    cy.get("[data-testid=login-tab]").click()
    cy.get("[data-testid=email-input]").type("vanessa@mail.com")
    cy.get("[data-testid=password-input]").type("43752Nessa")
    cy.get("[data-testid=login-submit-btn]").click()
  })
})
