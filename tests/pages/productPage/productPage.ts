import BasePage from "../basePage";

export default class ProductPage extends BasePage
{
    private readonly SauceLabsBackpackAddToCartBtn = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    private readonly cartBtn = this.page.locator('[id="shopping_cart_container"]');

    async clickSauceLabsBackpackAddToCartBtn(){
        await this.clickElement(this.SauceLabsBackpackAddToCartBtn);
    }

    async clickCartBtn(){
        await this.clickElement(this.cartBtn);
    }
}