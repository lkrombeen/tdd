const assert = require("assert")
const {StockManagementService} = require("../../src/stock_management_service")
const {Product} = require("../../src/product")

describe("The restock level for product 811", () => {
    const dateService = {
        getToday: function() {
            return new Date(2020, 7, 7);
        }
    }
    const guitarShopServiceClient = {
        getTotal: function (productId, startDate, endDate) {
            this.productId = productId;
            return {productID: productId, startDate: "6/28/2020", endDate: "7/27/2020", total: 15}
        }
    }
    const product = new Product(null, null);
    product.leadTime = 14;

    const stockManagementService = new StockManagementService(guitarShopServiceClient, dateService);

    it("is 7", () => {
        assert.strictEqual(stockManagementService.getRestockLevel(product), 7);
    });
});

describe("Brings below threshold", () => {
    it("should be true when the sale reduces the stock below the threshold", () => {
        const guitarShopServiceClient = {};
        const dateService = {};
        const stockManagementService = new StockManagementService(guitarShopServiceClient, dateService)
        const product = {leadTime: 14, stock: 2};
        const totalSales = 15;
        const quantitySold = 1;
        assert.strictEqual(stockManagementService.bringsBelowThreshold(product, totalSales, quantitySold), true)
    })

    it("should be false when the sale reduces the stock below the threshold", () => {
        const guitarShopServiceClient = {};
        const dateService = {};
        const stockManagementService = new StockManagementService(guitarShopServiceClient, dateService)
        const product = {leadTime: 14, stock: 100};
        const totalSales = 15;
        const quantitySold = 1;
        assert.strictEqual(stockManagementService.bringsBelowThreshold(product, totalSales, quantitySold), false)
    })
})