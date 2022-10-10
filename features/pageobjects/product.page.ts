/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ProductPage {
    /**
     * define selectors using getter methods
     */

    public get btnCheckout () {
        return $('button[id="product-checkout-btn"]');
    }

    public get btnViewOptions () {
        return $('button[id="product-view-options-btn"]');
    }

    public async selectDate (date: string) {
        await this.btnViewOptions.click();
        const val = '//div[contains(@aria-label,"#")]//div//div[1]';
        await $(val.replace("#",date)).click();
    }

    public async checkOutActivity () {
        await this.btnCheckout.click();
    }

}

export default new ProductPage();
