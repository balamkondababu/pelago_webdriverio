import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';


Given('user is on the pelago home page {string}', async (url) => {
    await browser.url(url)
});

When('user login with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password)
});

Then('user should login successfully', async () => {
    await expect(HomePage.user).toBeDisplayed();
    await HomePage.user.click();
    await expect(HomePage.profile).toBeDisplayed();
});

Then('user logout', async () => {
    await expect(HomePage.user).toBeDisplayed();
    await HomePage.user.click();
    await HomePage.logout.click();
    browser.refresh();
});