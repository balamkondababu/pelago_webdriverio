import { Given, When, Then } from '@wdio/cucumber-framework';
import bookingDetailsPage from '../pageobjects/booking.details.page';

import HomePage from '../pageobjects/home.page';
import ProductPage from '../pageobjects/product.page';


When('user search for an activity {string}', async (activity) => {
    await HomePage.searchActivity(activity);
});

When('user select date {string}', async (date) => {
    await ProductPage.selectDate(date);
});

Then('checkout the order', async () => {
    await ProductPage.checkOutActivity();
});

Then('enter booking details in booking details page {string} {string} {string} {string}', async (firstName, lastName, phone, email) => {
    await bookingDetailsPage.enterBookingDetails(firstName, lastName, phone, email);
});

Then('proceed to payment page', async () => {
    await bookingDetailsPage.proceedToPayment();
});
