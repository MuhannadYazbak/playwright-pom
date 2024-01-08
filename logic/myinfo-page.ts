import { Locator, Page } from "playwright";
import { BaseLoggedInPage } from "./base-logged-page";

export class MyInfoPage extends BaseLoggedInPage{
    private middleNameInput: Locator;
    private saveButton: Locator;

    constructor(page: Page){
        super(page);
        this.getPage();
        this.middleNameInput = page.locator('//input[@name="middleName"]');
        this.saveButton = page.locator('//button[@type="submit"]').first();
    }

    private updateMiddleName =async (middleName:string) => {
        await this.middleNameInput.clear();
        await this.middleNameInput.fill(middleName);
    }

    private clickSave =async () => {
        await this.saveButton.click();
    }

    public updateInfo=async (middleName:string) => {
        await this.updateMiddleName(middleName);
        await this.clickSave();
    }
}