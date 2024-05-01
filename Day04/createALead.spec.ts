import {chromium,test, expect } from "@playwright/test";


test.only('Test to create a new lead', async ({page}) => {

    //Load the url
await page.goto("http://leaftaps.com/opentaps/control/main");


//Enter the username
await page.fill("#username", "demosalesmanager");

//Enter the password
await page.fill("[name='PASSWORD']", "crmsfa");


//Click Login
await page.click(".decorativeSubmit");


//Click CRM/SFA
await page.locator("text=CRM/SFA").click();


//Click Leads
await page.click("text=Leads");


//Click Create Lead
await page.click("text=Create Lead" );

//Enter company name
const companyName =  page.locator("#createLeadForm_companyName");
await expect(companyName).toBeEditable();//Status check
await companyName.fill("Testleaf");




//Enter first name
const firstName = page.locator("[id='createLeadForm_firstName']");
await expect(firstName).toBeEditable();//Status check
await firstName.fill("Jonathan");


//Enter last name
const lastName = page.locator("[id='createLeadForm_lastName']");
await expect(lastName).toBeEditable();//Status check
await lastName.fill("David");

//Enter salutation
await page.fill("#createLeadForm_personalTitle", "Greetings from Playwright!");

//Enter title
await page.fill("#createLeadForm_generalProfTitle", "Creating Lead from Playwright");

//Enter annual revenue
await page.fill("#createLeadForm_annualRevenue", "15L");

//Enter department
await page.fill("#createLeadForm_departmentName", "Quality Assurance");

//Enter phone number
await page.fill("#createLeadForm_primaryPhoneNumber", "7736623622");


//Assertions
//To assert Company Name
 expect(companyName).toHaveValue("Testleaf");

//To assert First Name
 expect(firstName).toHaveValue("Jonathan");

//To assert Last Name
 expect(lastName).toHaveValue("David");





})