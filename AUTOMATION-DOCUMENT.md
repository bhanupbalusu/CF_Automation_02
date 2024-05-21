# WTW UI Automation Documentation

## Running Automation Tests on Windows:

1. Clone the repoistory:<br>
   <em>git clone -b automation https://github.com/wtw-ict-recruitment/SDET-TechnicalTest-Web-2024-bb.git </em><br><br>

2. Once cloned go to the project root folder in the terminal and type the following command and press enter:<br>
   <em>npm install </em><br><br>

3. To run the automation tests in the terminal, type the following command and press enter: <br>
   <em>npm run cypress:exec </em><br><br>

4. To generate the report for the executed automation tests, type the following command and press enter: <br>
   <em>npm run report </em><br><br>

5. To view the report navigate to project root folder and then to 'cypress/reports/mochareports' and open report.html file <br><br>

6. To run the automation tests in Cypress UI, type the following command and press enter: <br>
   <em>npm run cypress:open </em><br> <br><br>

## Running Automation Tests on MAC:

1. Clone the repoistory: <br>
   <em>git clone -b automation https://github.com/wtw-ict-recruitment/SDET-TechnicalTest-Web-2024-bb.git </em><br><br>

2. Once cloned go to the project root folder in the terminal and type the following command and press enter: <br>
   <em>npm install </em><br><br>

3. To run the automation tests in the terminal, type the following command and press enter: <br>
   <em>npm run cypress:run </em><br><br>

4. To generate the report for the executed automation tests, type the following command and press enter: <br>
   <em>npm run report </em><br><br>

5. To view the report navigate to project root folder and then to 'cypress/reports/mochareports' and open report.html file <br><br>

6. To run the automation tests in Cypress UI, type the following command and press enter: <br>
   <em>npm run cypress:open </em><br><br><br><br>

## Automation Framework Details:

**_Design Pattern_** : "Page Factory Design Pattern" <br><br>
**_Test Folder_** : "cypress/integration/tests" <br><br>
**_Page-Objects Folder_** : "cypress/support/page\*objects" <br><br>
**_Total number of tests_** : 5 <br><br>
**_Tests description_** : "1 - Location and Laguage test", "2 - Check and Sort by Date test", "3 - Filter by Article test", "4 - Link displayed in each article in the list test", "5 - End To End WTW UI Automation Test" <br><br>
**_Implemented_** : "retries", "uncaught exception handling", "screenshot capture when test failed", "report generation" <br><br><br>

## Automation Evidences:

1. Check in the root folder for 'WTW_UI_Automation_Test_Report.png' file for execution run via terminal.
2. Check in the root folder for 'WTW_Cypress_Test_Report.png' file for execution run via Cypress UI.
