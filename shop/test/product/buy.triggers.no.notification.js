const assert = require("assert")
const {ProductService} = require("../../src/product_service")


describe("Buy a product", () => {
    describe("Buy a product that is close to its restock level", () => {
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
                return false;
            }
        }
        const guitarShopServiceClient = {
            getProduct: function (productId) {
                return {
                    id: productId,
                    make: "Epiphone",
                    range: "Les Paul",
                    model: "Les Paul Classic",
                    description: "Epiphone Les Paul Classic In Worn Heritage Cherry Sunburst",
                    price: 399,
                    stock: 27,
                    rackspace: 30,
                    leadTime: 14,
                    minOrder: 20
                }
            },
            getTotal: function (productId, startDate, endDate) {
                this.productId = productId;
                return {productID: productId, startDate: "6/28/2020", endDate: "7/27/2020", total: 15}
            }
        }

        const dateService = {
            getToday: function () {
                return new Date();
            }
        }

        describe("a sale is made that does not reduce it to its restock level", () => {

            const productService = new ProductService(notificationService, stockManagementService, guitarShopServiceClient, dateService);
            productService.buy(811, 2);

            it(`sends no event`, () => {
                assert.strictEqual(notificationService.hasSentEvent, false)
            });
        });
    })
})