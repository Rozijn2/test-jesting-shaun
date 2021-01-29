const calculateTotal = require("./index").calculateTotal;
test("calculateTotal() function should return the multiplication of two numbers" , () => {

    // ARRANGE
    const quantity = 2;
    const price = 16.95;

    //ACT
    const total = calculateTotal(quantity,price);

    //ASSERT
    expect(total).toBe(33.9);
}
);