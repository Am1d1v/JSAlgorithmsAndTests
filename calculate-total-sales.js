

function calculateTotalSalesWithTax(products, taxRate) {

    // Total Sales
    const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

    // Tax Amount
    const taxAmount = (totalSales * taxRate) / 100

    // Total sales plus tax amount
    const totalSalesWithTax = totalSales + taxAmount

    return parseFloat(totalSalesWithTax.toFixed(2));

}


module.exports = calculateTotalSalesWithTax;
