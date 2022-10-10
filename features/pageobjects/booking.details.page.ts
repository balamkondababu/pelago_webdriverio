/**
 * sub page containing specific selectors and methods for a specific page
 */
 class BookingDetails {
    /**
     * define selectors using getter methods
     */
    public get inputFirstName () {
        return $('input[name="firstName"]');
    }

    public get inputLastName () {
        return $('input[name="lastName"]');
    }

    public get inputPhone () {
        return $('input[type="tel"]');
    }

    public get inputEmail () {
        return $('input[name="email"]');
    }

    public get btnContinue () {
        return $('button[id="proceed-to-pay-btn"]');
    }

    public get btnSkipAndPay () {
        return $('//button[contains(text(),"Skip and Pay")]');
    }

    public async enterBookingDetails (firstName: string, lastName:string, phone: string, email:string) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.btnContinue.click();
    }

    public async proceedToPayment () {
        await this.btnSkipAndPay.click();
    }
}

export default new BookingDetails();
