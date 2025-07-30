import { test, expect } from '@playwright/test';

//Test Case 1
test('Register User', async ( { page }) => {
    const userName = 'TestUser5';
    const email = 'playtestuser5@email.com';
    await page.goto('https://automationexercise.com/');
    //Verify page is loaded
    await expect(page.locator('img[src="/static/images/home/logo.png"]')).toBeVisible();
    //Click Signup/Login button
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    //Verify new user signup is visible
    await expect(page.locator('.signup-form h2')).toBeVisible();
    //Enter username and email
    await page.getByPlaceholder('Name').fill(userName);
    await page.getByPlaceholder('Email Address').nth(1).fill(email);
    await page.getByRole('button', {name: 'Signup'}).click();
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.locator('.top').nth(1).check();
    //const actualName = page.locator('#name').textContent();
    //console.log(actualName)
    //expect(actualName).toBe(userName);
    await page.locator('#password').fill('P@ss1234');
    await page.locator('#days').selectOption('10');
    await page.locator('#months').selectOption('7');
    await page.locator('#years').selectOption('2000');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    await page.locator('#first_name').fill('Test');
    await page.locator('#last_name').fill('User');
    await page.locator('#company').fill('TestNest');
    await page.locator('#address1').fill('Street 1');
    await page.locator('#address2').fill('Street 2');
    //await page.getByLabel('country').pressSequentially('Gha', {delay:100});
    await page.getByLabel('country').selectOption('Singapore');
    await page.locator('#state').fill('Singapore');
    await page.locator('#city').fill('S-East');
    await page.locator('#zipcode').fill('1234');
    await page.locator('#mobile_number').fill('1234567890');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.locator('h2 b')).toBeVisible();
    await page.locator('.btn.btn-primary').click();
    await expect(page.getByText('Logged in as ' +userName)).toBeVisible();
    console.log(page.getByText('Logged in as ' +userName));
    await page.getByRole('link', {name: 'Delete Account'}).click();
    await expect(page.locator('h2 b')).toBeVisible();
    await page.locator('.btn.btn-primary').click();

    //await page.pause();



});