"use strict"

var cars = [
    {brand: "Honda", price: 13000},
    {brand: "Rolls-Royce", price: 120000}
]

function carInfo(car) {
    var expensive = (car.price <= 20000) ? 'cheap' : 'expensive';

    return `Price of my new ${car.brand} is ${car.price}$ and it is ${expensive} car`
}

cars.forEach(car => console.log(carInfo(car)));