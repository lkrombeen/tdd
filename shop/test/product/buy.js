const assert = require("assert")
const [Product] = require("../../src/product")



describe("Buy a product", () => {
    describe("Buy a product that is close to its restock level", () => {
        const notificationService = {
            hasSentEvent: false,
            sendEvent: function () {
                this.hasSentEvent = true;
            }
        }

        describe("a sale is made that does not reduce it to its restock level", () => {
            const stockManagementService = {
                quantity: 0,
                productId: 0,
                bringsBelowThreshold: function (productId, quantity){
                    this.quantity = quantity;
                    this.productId = productId;
                    return false;
                }
            }

            const product = new Product(notificationService, stockManagementService);
            product.buy(2);

            it(`sends no event`, () => {
                assert.strictEqual(notificationService.hasSentEvent, false)
            });
        });


    })
})