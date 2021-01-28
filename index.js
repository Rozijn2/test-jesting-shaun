function calculateTotal(quantity,price) {
    const total = quantity * price;
    return total;
}
const saleTotal = calculateTotal(2,16.95);
console.log(saleTotal);