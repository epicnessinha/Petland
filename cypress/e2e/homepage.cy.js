describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("verify page contain title and description", () => {
    cy.get("data-testeid=title")
    cy.get("data-testeid=description")
  })
})
