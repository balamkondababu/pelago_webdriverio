/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */

    public get clickOnProfile() {
         return $('svg[class="user-circle"]')
    }

    public get clickLogin() {
        return $('//div[contains(text(),"Log In")]')
   }

    public get inputUsername () {
        return $('input[name="email"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnSubmit () {
        return $('#login-btn');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.clickOnProfile.click();
        await this.clickLogin.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();