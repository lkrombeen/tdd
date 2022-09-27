class ProductService {
    constructor(notificationService, stockManagementService, guitarShopServiceClient, dateService) {
        this.notificationService = notificationService;
        this.stockManagementService = stockManagementService;
        this.guitarShopServiceClient = guitarShopServiceClient;
        this.dateService = dateService;
    }

    buy(productId, quantitySold){
        const today = this.dateService.getToday();
        const product = this.guitarShopServiceClient.getProduct(productId);
        const totalSales = this.guitarShopServiceClient.getTotal(product.productId, today - 30, today);
        if (this.stockManagementService.bringsBelowThreshold(product, totalSales, quantitySold)) {
            this.notificationService.sendEvent();
        }
    }
}

module.exports = {ProductService}