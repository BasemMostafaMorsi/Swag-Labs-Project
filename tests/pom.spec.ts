import { expect, test } from "../fixtures/fixture";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import * as testData from './testData/testData.json';


test.describe('suite 1', ()=>{
    test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
})

test.afterEach(async ({page})=>{
    await page.close();
})

test('E2E Test', async ({page, loginPage, productPage})=>{

    //await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUserName(testData.username);
    await loginPage.enterPassword(testData.password);
    await loginPage.clickLoginButton();
    await loginPage.tackScreenshot('./tests/screenshots/loginPage.png');
    await productPage.clickSauceLabsBackpackAddToCartBtn();
    await productPage.tackScreenshot('./tests/screenshots/productPage.png');
    await productPage.clickCartBtn();
    await productPage.tackScreenshot('./tests/screenshots/cartPage.png');
    //await page.waitForTimeout(3000);
    
})

})
