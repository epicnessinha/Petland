describe("home page", () => {
  beforeEach(() => {})
  it("submit a login form", () => {
    cy.get("[datatesteid=login-tab]").click()
    cy.get("[data-testeid=login-username-input]").type("vanessa@mail.com")
    cy.get("[data-testeid=login-password-input]").type("43752Nessa")
    cy.get("[data-testeid=login-submit-btn]").click()
  })
})
