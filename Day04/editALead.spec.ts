import {chromium,test, expect } from "@playwright/test";


test.only('Test to edit a lead', async ({page}) => {

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


//Click Find Leads
await page.getByRole('link', { name: 'Find Leads' }).click();

//Enter First name
const firstName =  page.getByRole('textbox', { name: 'First name:' })
await firstName.fill("Jonathan");

//Click Find Leads button
await page.getByRole('button', { name: 'Find Leads' }).click();

//Select first id
await page.getByRole('link', { name: '10562' }).click();

//Click Edit button
await page.getByRole('link', { name: 'Edit' }).click();
//Edit Company
await page.fill("#updateLeadForm_companyName","TestLeafEdited");
//Edit Annual Revenues
await page.fill("#updateLeadForm_annualRevenue","9000");
//Edit Department
await page.fill("#updateLeadForm_departmentName","QA");
//Enter Description
await page.fill("#updateLeadForm_description","Lead has been edited by Playwright :)");
//Click update
await page.getByRole('button',{ name: 'Update'}).click();


//Assertions
const companyName = page.locator("#viewLead_companyName_sp");
const annualRevenue = page.locator("#viewLead_annualRevenue_sp");
const department = page.locator("#viewLead_departmentName_sp");
const description = page.locator("#viewLead_description_sp");
//To assert company Name
 expect(companyName).toHaveText("TestLeafEdited (10562)");

//To assert annual revenue
 expect(annualRevenue).toHaveText("$9,000.00");

//To assert department
 expect(department).toHaveText("QA");

 //To assert description
 expect(description).toHaveText("Lead has been edited by Playwright :)");




})