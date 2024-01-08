describe("start page should have", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy='about-tab']").click();
    });
    it("have a page title", () => {
        cy.get("h2").should("have.text", "About");
    });
    it("have a text paragraphs", () => {
        cy.get("p").should("have.text", "Lorum ipsum");
    });

    it("have a read more button", () => {
        cy.get("button").should("have.text", "Read more");
        cy.get("button").click();
    });

    it("open a side sheet that opens if read more button is clicked", () => {
        cy.get("button").click();
        cy.get("[data-cy='side-sheet']").should("exist");
    });

    it("the side sheet has several text boxes", () => {
        cy.get("[data-cy='text-field-1']").should("have.text", "Lorum ipsum");
        cy.get("[data-cy='text-field-2']").should(
            "have.text",
            "Lorum ipsum, lorum ipsum"
        );
        cy.get("[data-cy='text-field-3']").should(
            "have.text",
            "Lorum ipsum, lorum"
        );
        cy.get("[data-cy='text-field-4']").should(
            "have.text",
            "Ipsum, lorum ipsum"
        );
        cy.get("[data-cy='text-field-5']").should(
            "have.text",
            "Lorum ipsum, ipsum lorum."
        );
    });

    it("the side sheet has a close button that closes the side sheet when click", () => {
        cy.get("[data-cy='close-button']").should("exist");
        cy.get("[data-cy='close-button']").click();
    });
});
