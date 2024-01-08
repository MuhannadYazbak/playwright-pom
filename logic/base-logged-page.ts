import { Page, Locator } from "playwright";
import { BasePage } from "./base-page";

export class BaseLoggedInPage extends BasePage{
    private user: Locator;
    private pim: Locator;
    private myinfo: Locator;
    private footer: Locator;

    constructor(page: Page){
        super();
        this.user = page.locator('//span[contains(@class,"userdropdown")]');
        this.myinfo = page.getByText('My Info');
        this.pim = page.getByText('PIM');
        this.footer = page.locator('//a[text()="OrangeHRM, Inc"]');
    }

    public clickUser =async (option: string) => {
        await this.user.click();
        await this.user.selectOption(option);
    }

    public getMyInfo =async () => {
        await this.myinfo.click();
    }

    public getPIM =async () => {
        await this.pim.click();
    }

    public clickFooter = async() => {
        await this.footer.click();
    }
}