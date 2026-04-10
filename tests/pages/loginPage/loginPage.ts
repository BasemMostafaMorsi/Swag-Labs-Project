import BasePage from "../basePage";

export default class LoginPage extends BasePage{
    private readonly userNameField = this.page.locator('[id="user-name"]');
    private readonly passwordField = this.page.locator('[id="password"]');
    private readonly loginButton = this.page.locator('[id="login-button"]');

    async enterUserName(userName :string){
        await this.enterTextToElement(this.userNameField , userName);
    }

    async enterPassword(password :string){
        await this.enterTextToElement(this.passwordField , password);
    }
    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}