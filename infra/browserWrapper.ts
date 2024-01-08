import { Browser, BrowserContext, Page, chromium } from "playwright";

export class BrowserWrapper{
    browser: Browser | undefined;
    context: BrowserContext | undefined;
    page: Page | undefined;

    public async getPage(){
        this.browser = await chromium.launch();
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this.page;
    }

    public async closeBrowser(){
        this.browser?.close();
    }
}