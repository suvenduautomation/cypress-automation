# cypress-automation
# Brief about the project

#This repo contains various three test scenarios to validate folloing items:

Verify the presence of the Convincely script on thepage:
For the  scenario, Cypresss Intercept (cy.intercept) function us used to get network request when a page is loaded. As part of test assertion, verification has been done to make sure that Convincely JS is injected successfully.

Verify the presence of the Convincely widget on thepage

For the  scenario, Cypresss Intercept (cy.intercept) function us used to get network request when a page is loaded. As part of test assertion, verification has been done to make sure that Convincely widget.JS is injected successfully.

Verify the presence of the ‘Callback’ modal once theconvincely experience has loaded
Verify that the contact phone number is as expectedcorrec

For both scenarios, One test case has been written (Verify phone number in convincely page is correct). 

Assertion library used for testing Cypress Chai BDD Assertion 
https://docs.cypress.io/guides/references/assertions#Chai


# How to download and run the project
go to git Repo : https://github.com/suvenduautomation/cypress-automation/tree/feature_cypress_automation_setup
Clone the project in local using the command: git clone https://github.com/suvenduautomation/cypress-automation.git
Goto the project folder in local
run the command: npm install (This is not necessary for this instance but as a standard practice to make sure all packages are installed as defined in package.json dependency)
Finanlly run : npx cypress open to run cypress test.