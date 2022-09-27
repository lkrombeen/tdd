class StockManagementService {
    constructor(guitarShopServiceClient, dateService) {
        this.guitarShopServiceClient = guitarShopServiceClient;
        this.dateService = dateService;
    }

    getRestockLevel(product) {
        const today = this.dateService.getToday();
        const {total} = this.guitarShopServiceClient.getTotal(product.productId, today - 30, today);
        return Math.ceil(total / 30 * product.leadTime);
    }
}

module.exports = {StockManagementService}