import { chromium, test } from "@playwright/test";


test.only('Login to Salesforce', async ({page}) => {



//Load the url
await page.goto("https://login.salesforce.com/");


//Enter the username
await page.fill("#username", "yonasan@789.com");

//Enter the password
await page.fill("#password", "Gerrad789");


//Click Login
await page.click("#Login");


await page.waitForTimeout(10000);

let title = await page.title();
let url = await page.url();
console.log(`Title: ${title}\n URL: ${url}`);
await page.close();



})

