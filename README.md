<h3>Introduction:</h3>

This repository contains a Test Automation framework built using Cypress and JavaScript for testing of web application

<h3>Prerequisite:</h3> 

1.	Node.js and npm should be available in your machine. If they are not installed, you can download and install them from Node.js website.
(node Version: v22.14.0 recommended)
(npm Version: v10.9.2 recommended)

2.	Cypress is the primary testing framework used in this repository 
When you clone and build the project Cypress will be downloaded automatically if not you can run below command to install cypress
**npm install cypress --save-dev**
(Cypress version: v14.2.0 recommended)

3.	Visual Studio IDE for Development and code run 
(VS IDE Version: v1.98.2 recommended)

<h3>Setup:</h3>

•	Clone the Git repository to your local machine:
git clone https://github.com/kpraveena825/DemoblazeAutomation.git
•	Open the project directory in Visual Studio:
If using VS Code, open the terminal and navigate to the project directory:
cd "path/DemoblazeAutomation"
•	Install project dependencies by running the following command in the terminal

**npm install**

<h3>Running Tests:</h3>

•	<h6>Running the Tests in the Cypress GUI:</h6>
            **npm run cy:open **
(Run above command in CLI to open Cypress GUI and select E2E testing option-> choose any browser -> select a Test file you wish to run)
•	<h6>Running Tests in Headless Mode (CLI):</h6>
             **npx cypress run**
npx cypress run --spec "cypress/e2e/loginValidation.js" – (To run a specific test file from CLI, replace file name with your test file name)

<h3>Project Structure:</h3>

•	cypress/e2e: contains all the test files/spec files, you can organize you tests into subsidiary as needed
•	cypress/fixtures: contains external fixtures (e.g : login credentials , user data, product details in json format) 
•	cypress/support: contains custom commands and global configuration
•	cypress/supports/pageObjects: Contains Page object model(POM) classes representing webpages and their elements. 
•	cypress/reports: contains test reports, screenshots and video evidences.
•	cypress.config.js: contains cypress configuration settings.
•	package.json: contains all the dependencies used in the project.

<h3>Reporting:</h3>
<h6>Mochawesome report (screenshots and videos are attached to the report by default) is used for reporting </h6>

<h3>Test Approach: </h3>
<h4>What was considered essential to test:</h4>
I have aimed to cover 2 essential use cases of the e-commerce platform, 
•	User login:
 To ensure that only user with the valid credentials can log in to the application. and gets an error in case of invalid credentials. 
•	Product Checkout E2E flow: 
To ensure a seamless shopping experience, I’m verifying that products can be selected and added to the cart while maintaining the same price throughout the product flow—from product details to the cart page. Additionally, I’m validating that the cart accurately displays the selected products and total price. Finally, when user performs checkout an order confirmation overlay is displayed with the details.


<h3>Test Design</h3>
I have used the Page Object Model (POM) design pattern to structure the test code for better maintainability and scalability by separating the test logic from the page structure and interactions. Each page of the application is represented by a corresponding Page Object, which contains methods for interacting with elements on that page.

<h5>Why POM?</h5>
Testing Quality: POM helps to write tests that are easy to understand and maintain. This can help improve the quality of the testing process to improve the readability and reliability of the scripts.
Reusing Code: Using POM, we can reuse our functions in different Test Scripts by importing them from Page Objects class. Redundant functions can be avoided this way. 
Easy maintenance: It is easier to maintain, suppose if something got changed on any page, you could easily find the functions and locators that need to be changed by that page class


<h3>Reference:</h3>
	https://docs.cypress.io/ - Used for cypress configuration and element interactions 
	https://www.npmjs.com/package/cypress-mochawesome-reporter - mocha report integration
	https://chatgpt.com/ - 
I used ChatGPT to check sample code for alert handling, to read data from fixtures into the spec file and in readme.md to refine the readability and clarity of my sentence while ensuring it remains relevant to the Page Object Model (POM) context.


The final submission is my own work, incorporating suggestions from the sources mentioned above.


