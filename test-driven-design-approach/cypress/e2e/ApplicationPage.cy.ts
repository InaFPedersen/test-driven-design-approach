describe("start page should have", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='application-tab']").click();
    });
    it("have a page title", () => {
        cy.get("h2").should("have.text", "Application");
    });
    it("has a form with input fields", () => {
        cy.get("[data-cy='name-input']").should("exist");
        cy.get("[data-cy='age-input']").should("exist");
        cy.get("[data-cy='description-input']").should("exist");
    });
    it("has a save button", () => {
        cy.get("button").should("have.text", "Save");
        cy.get("button").click();
    });
    it("has information boxes", () => {
        cy.get("[data-cy='info-box-1']").should("exist");
        cy.get("[data-cy='info-box-2']").should("exist");
        cy.get("[data-cy='info-box-3']").should("exist");
    });
    it("has a image", () => {
        cy.get("img").should("exist");
    });
});
