const assert = require("assert")

class Product {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    buy(quantity) {

    }
}

describe("Buy a product that is close to its restock level", () => {
    const notificationService = {
        hasSentEvent: false,
        sendEvent: function () {
            this.hasSentEvent = true;
        }
    }
    describe("a sale is made that does not reduce it to its restock level", () => {
        it(`sends no event`, () => {
            const product = new Product(notificationService);
            product.buy(2);
            assert.strictEqual(notificationService.hasSentEvent, false)
        });
    })
});