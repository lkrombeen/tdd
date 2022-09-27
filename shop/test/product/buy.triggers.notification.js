const assert = require("assert")
const [Product] = require("../../src/product")

describe("a sale is made that reduces the stock to its restock level", () => {
    const notificationService = {
        hasSentEvent: false,
        sendEvent: function () {
            this.hasSentEvent = true;
        }
    }

    const stockManagementService = {
        quantity: 0,
        productId: 0,
        bringsBelowThreshold: function (productId, quantity) {
            this.quantity = quantity;
            this.productId = productId;

            return true;
        }
    }

    const product = new Product(notificationService, stockManagementService);
    product.buy(2);

    it("sends an event", () => {
        assert.strictEqual(notificationService.hasSentEvent, true)
    });
})