describe("start page should have", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    it("have a title", () => {
        cy.get("h1").should("have.text", "Test application");
    });
    it("have a logo", () => {
        cy.get("img").should("exist");
    });
    it("have a paragraph", () => {
        cy.get("p").should("have.text", "Lorum ipsum");
    });
    it("have a link text that can be clicked", () => {
        cy.get("[data-cy='learn-react-link']").should(
            "have.text",
            "Learn React"
        );
        cy.get("[data-cy='learn-react-link']").click();
    });
});
