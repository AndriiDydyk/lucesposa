/// <reference types="cypress" />


describe('Home page/Header', () => {
    beforeEach(() => {
    cy.visit('https://lucesposa.com/');
    cy.wait(4000);
    });

    it('should display the logo on the Home page in Header', () => {
        cy.get('.mainLogo').should('be.visible')
    });
    
    it('should display the [Search] button on the Home page in Header', () => {
        cy.get('.search-button').should('be.visible');
    });
    
    it('should display the Search field on the Home page after clicking on [Search] button', () => {
        cy.get('.search-button').should('exist').click();
        cy.get('[placeholder="Write the model name"]').should('be.visible');
    });
    
    it('should display the results of search after clicking on [Search] button', () => {
        cy.get('.search-button').should('exist').click();
        cy.get('[placeholder="Write the model name"]')
            .should('be.visible')
            .type('Alma')
            .type('{Enter}');
        cy.get('span').should('contain.text', 'Search results:');
        cy.get('[class="categ_item scrolled"]').should('be.visible');
    });
    
    it('should display the dropdown menu in Header', () => {
        cy.get('[class="brilliant_burger_new brilliant_burger"]').should('be.visible');
    });
    
    it('should display the dropdown menu when the button is clicked', () => {
        cy.get('[class="brilliant_burger_new brilliant_burger"]').click();
        cy.contains('a', 'Wedding dresses').should('be.visible');
        cy.contains('a', 'About us').should('be.visible');
        cy.contains('a', 'Cooperation').should('be.visible');
        cy.contains('a', 'Get inspired').should('be.visible');
        cy.contains('a', 'Contacts').should('be.visible');
        cy.contains('[class="onlyMob brilliant_menu_motto"]', 'Dream. Choose. Shine!').should('be.visible');
    });
});
