

function calculateTotalSalesWithTax(products, taxRate) {

    const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

    return totalSales

}

const products = [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ];

console.log(calculateTotalSalesWithTax(products));

module.exports = calculateTotalSalesWithTax;
