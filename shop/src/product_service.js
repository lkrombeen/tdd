class ProductService {
    constructor(notificationService, stockManagementService, guitarShopServiceClient) {
        this.notificationService = notificationService;
        this.stockManagementService = stockManagementService;
        this.guitarShopServiceClient = guitarShopServiceClient;
    }

    buy(productId, quantitySold) {
        const product = this.guitarShopServiceClient.getProduct(productId);
        if (this.stockManagementService.bringsBelowThreshold(product, quantitySold)) {
            this.notificationService.sendEvent();
        }
    }
}

module.exports = {ProductService}