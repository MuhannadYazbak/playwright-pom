import { randomInt } from "crypto";
import { Locator, Page } from "playwright";
import { BaseLoggedInPage } from "./base-logged-page";

export class PimPage extends BaseLoggedInPage{
    private trashButton: Locator;

    constructor(page: Page){
        super(page);
        this.getPage();
        this.trashButton = page.locator('//*[contains(@class,"trash")]');
    }
    public removeRecord =async () => {
        if(await this.trashButton.count()> 1){
            await this.trashButton.nth(0).click();
        }else{
            await this.trashButton.click();
        }
    }
}