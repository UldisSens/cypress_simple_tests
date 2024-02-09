beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */


/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionality(google yourself for solution!)
 */

it.only('User cannot submit form without providing name', () => {
    inputValidData('Mansvards')
    cy.get('#name').scrollIntoView()
    cy.get('#name').clear()
    cy.get('#name').type('Savsvards')
    cy.get('input[type="submit"]').should('be.disabled')
    })
    
    function inputValidData(_Mansvards) {
    cy.log('Name will be filled')
    cy.get('#name').type('Savsvards')
    cy.get('input[name="email"]').type('mans@meils.com')
    cy.get('#country').select('Spain')
    cy.get('#city').select('Madrid')
    cy.get(':checkbox').check().should('be.checked')
    }


  