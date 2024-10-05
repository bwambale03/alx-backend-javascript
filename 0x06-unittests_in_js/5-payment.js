const Utils = require('./utils')

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`the total cost is: ${totalCost}`);
};
MediaSourceHandle.exports = sendPaymentRequestToApi;
