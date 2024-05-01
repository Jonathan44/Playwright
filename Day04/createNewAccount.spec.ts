import { chromium, test, expect } from "@playwright/test";
import { log } from "console";
import { text } from "stream/consumers";


test.only('Create A New Account In Salesforce', async ({page}) => {



//Load the url
await page.goto("https://login.salesforce.com/");


//Enter the username
const userName = page.getByLabel("username");
await userName.fill("yonasan@789.com");

//Enter the password
const password = page.getByLabel("password");
await password.fill("Gerrad789");

//Click Login
await page.click("#Login");
await page.waitForTimeout(12000);

let title =  await page.title();
let url = page.url();

//Asserting Title and URL
expect(title).toBe(title);
expect(url).toBe(url);

//Printing the Title and URL
console.log(`Title: ${title}\nURL: ${url}`);

const appLauncher = page.locator('button[class="slds-button slds-icon-waffle_container slds-context-bar__button slds-button forceHeaderButton salesforceIdentityAppLauncherHeader"]');
await appLauncher.click();
await page.getByText("View All").click();
await page.getByPlaceholder("Search apps or items...").fill("Service");

await page.locator("//div[@role='application']/one-app-launcher-app-tile[1]").click();
await page.locator("[title='Accounts']").click();
await page.getByRole('button', { name: 'New' }).click();
await page.locator("[name='Name']").fill("Decode789");
await page.locator("//button[@name='SaveEdit']").click();
const alert = await page.getByRole('alertdialog').textContent();
console.log(alert);
expect(alert).toContain('Decode789');



})

