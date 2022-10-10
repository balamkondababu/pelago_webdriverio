/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    public get profile () {
        return $('a[href="/en-IN/account/profile/"]');
    }

    public get user () {
        return $('//span[contains(@class,"styles_avatar")]');
    }

    public get logout () {
        return $('//span[contains(text(),"Log Out")]');
    }

    public get inputSearch () {
        return $('input[placeholder="Search for destinations or activities to do..."]');
    }

    public get btnSearch () {
        return $('//button[contains(text(),"Search")]');
    }

    public get selectActivity () {
        return $('//section[starts-with(@class,"styles_activity")]//img');
    }

    public async searchActivity (activity: string) {
        await this.inputSearch.setValue(activity);
        await this.btnSearch.click();
        await this.selectActivity.click();
    }
}

export default new HomePage();
