import { Locator, Page } from "playwright";
import { BaseLoggedInPage } from "./base-logged-page";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage{
    private userNameInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;

    constructor(page: Page){
        super();
        this.getPage();
        this.userNameInput = page.locator('//input[@name="username"]');
        this.passwordInput = page.locator('//input[@name="password"]');
        this.submitButton = page.locator('//button[@type="submit"]');
    }
    private fillUserName =async (userName:string) => {
        await this.userNameInput.fill(userName);
    }

    private fillPasswordInput =async (password:string) => {
        await this.passwordInput.fill(password);
    }

    private clickSubmit =async () => {
        await this.submitButton.click();
    }

    public fullLogin =async (userName:string, password: string) => {
        await this.fillUserName(userName)
        await this.fillPasswordInput(password);
        await this.clickSubmit()
    }
}