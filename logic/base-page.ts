import { Page } from "playwright";
import { BrowserWrapper } from "../infra/browserWrapper";
export class BasePage{
    protected browser: BrowserWrapper;

    constructor(){
        this.browser = new BrowserWrapper();
    }

    protected async getPage(){
        return await this.browser.getPage();
    }

}