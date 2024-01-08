import test, { chromium, expect } from "playwright/test";
import { LoginPage } from "../logic/login-page";
import { BaseLoggedInPage } from "../logic/base-logged-page";
import { PimPage } from "../logic/pim-page";
import { MyInfoPage } from "../logic/myinfo-page";

test.describe('my suite', async () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const login = new LoginPage(page);
        await login.fullLogin('Admin', 'admin123');
        expect(page.url).not.toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });
    test.afterEach('clean',async ({page}) => {
        page.close();
    })

    test('go to pim remove one record', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        const pim = new PimPage(page);
        pim.getPIM();
        pim.removeRecord();

    });

    test('go to myinfo and update', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        const myinfo = new MyInfoPage(page);
        myinfo.getMyInfo();
        myinfo.updateInfo('Mathew');
    });

});