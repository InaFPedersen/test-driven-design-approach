describe("The header should have", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    it("have a logo", () => {
        cy.get("[data-cy='logo']");
    });
    it("have a title", () => {
        cy.get("h1").should("have.text", "Test application");
    });
    it("have a home tab", () => {
        cy.get("[data-cy='home-tab']").should("have.text", "Home");
    });
    it("have a about tab", () => {
        cy.get("[data-cy='about-tab']").should("have.text", "About");
    });
    it("have a application tab", () => {
        cy.get("[data-cy='application-tab']").should(
            "have.text",
            "Application"
        );
    });
    it("have a help icon", () => {
        cy.get("[data-cy='help-icon']");
    });
    it("have a profile icon", () => {
        cy.get("[data-cy='profile-icon']");
    });
});
