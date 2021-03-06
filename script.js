"use strict";
//#1 Tallest Mountain
;
let mountains = [
    { mtnName: "Kilimanjaro", height: 19341 },
    { mtnName: "Everest", height: 29029 },
    { mtnName: "Denali", height: 20310 },
];
console.log(mountains);
const findNameOfTallestMountain = (mountainArray) => {
    let tallestMtn = mountainArray[0];
    mountainArray.forEach(mountain => {
        if (tallestMtn.height < mountain.height) {
            tallestMtn = mountain;
        }
        ;
    });
    return tallestMtn.mtnName;
};
let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);
;
let products = [
    { productName: "Corsair RAM", price: 160 },
    { productName: "Corsair Case", price: 140 },
    { productName: "Corsair Cooler", price: 170 },
];
console.log(products);
const calcAverageProductPrice = (productArray) => {
    let sum = 0;
    let numOfProducts = products.length;
    productArray.forEach(product => {
        sum += product.price;
    });
    return sum / numOfProducts;
};
let porductAvg = calcAverageProductPrice(products);
console.log(porductAvg);
;
let inventory = [
    { product: { productName: "motor", price: 10.00 }, quantity: 10 },
    { product: { productName: "sensor", price: 12.50 }, quantity: 4 },
    { product: { productName: "LED", price: 1.00 }, quantity: 20 },
];
console.log(inventory);
const calcInventoryValue = (inventoryArray) => {
    let sum = 0;
    inventoryArray.forEach(item => {
        sum += item.product.price * item.quantity;
    });
    return sum;
};
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
