describe("Home page should have", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='home-tab']").click();
    });
    it("have a page title", () => {
        cy.get("h2").should("have.text", "Home");
    });
    it("have a text paragraphs", () => {
        cy.get("p").should("have.text", "Lorum ipsum");
    });

    it("have a image", () => {
        cy.get("[data-cy='test-picture']").should("exist");
    });
});
