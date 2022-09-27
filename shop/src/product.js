class Product {
    constructor(notificationService, stockManagementService) {
        this.notificationService = notificationService;
        this.stockManagementService = stockManagementService;
    }

    buy(quantity) {
        if (this.stockManagementService.bringsBelowThreshold(this, quantity)) {
            this.notificationService.sendEvent();
        }
    }
}

module.exports = [Product]