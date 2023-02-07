describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("verify page contain title and description", () => {
    cy.get("[data-testid=title]")
    cy.get("[data-testid=description]")
  })
  it("simulate user login", () => {
    cy.get("[data-testid=login-tab]").click()
    cy.get("[data-testid=email-input]").type("vanessa@mail.com")
    cy.get("[data-testid=password-input]").type("43752Nessa")
    cy.get("[data-testid=login-submit-btn]").click()
    cy.get("[data-testid=logged-in-title]").contains("Hello Admin", {
      matchCase: false,
    })
  })
})
