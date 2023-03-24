describe('Module Four Project', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=tos]');

    it('sanity test', () => {
        expect(1+2).to.equal(3);
    }) 

    it('The proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');

        cy.contains('Create a Friend').should('exist');
    })

    it('Can type in input', () => {
        nameInput()
            .should('have.value', '')
            .type('Aodhan Roche')
            .should('have.value', 'Aodhan Roche');
        
        emailInput()
            .should('have.value', '')
            .type('aodhanroche@gmail.com')
            .should('have.value', 'aodhanroche@gmail.com');

        passwordInput()
            .should('have.value', '')
            .type('Thisismypassword')
            .should('have.value', 'Thisismypassword');
    })

    it('Can check the TOS box', () => {
        tosInput()
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('Can submit the form data, and clears everything from the text boxes', () => {
        nameInput().type('Aodhan Roche')
        emailInput().type('aodhanroche@gmail.com')
        passwordInput().type('Thisismypassword')
        tosInput().check()

        cy.contains('Create a Friend').click()
        cy.contains('aodhanroche@gmail.com').should('exist')

        nameInput().should('have.value', '')
        emailInput().should('have.value', '')
        passwordInput().should('have.value', '')
        tosInput().should('not.be.checked')
    })


})