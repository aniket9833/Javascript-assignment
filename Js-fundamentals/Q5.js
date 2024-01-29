function estimatedDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;

        default:
            console.log("Invalid package type");
        
    }
    console.log(`Estimated delivery time for ${packageType} package is ${deliveryTime}`);
}
estimatedDeliveryTime("standard");
estimatedDeliveryTime("express");
estimatedDeliveryTime("overnight");

