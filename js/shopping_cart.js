let product1 = {
    image: "/images/hot-beverages.png",
    oldprice: "$19000",
    price: $25000,
    cart: "ADD TO CART"
}
let product2 = {
    image: "/images/hot-beverages.png",
    oldprice: "$190000",
    price: $250000,
    cart: "ADD TO CART"
}
let product3 = {
    image: "/images/hot-beverages.png",
    oldprice: "$12000",
    price: $15000,
    cart: "ADD TO CART"
}
let product4 = {
    image: "/images/hot-beverages.png",
    oldprice: "$290000",
    price: $350000,
    cart: "ADD TO CART"
}
let product5 = {
    Image: "/images/hot-beverages.png",
    oldprice: "$38000",
    price: $48000,
    cart: "ADD TO CART"
}
let product6 = {
    image: "/images/hot-beverages.png",
    oldprice: "200000",
    price: $280000,
    cart: "ADD TO CART"
}
let product7 = {
    image: "/images/hot-beverages.png",
    name: "hot-beverages",
    price: $5000,
    cart: "ADD TO CART"
}
let product8 = {
    image: "/images/hot-beverages.png",
    name: "hot-beverages",
    price: $5000,
    cart: "ADD TO CART"
}

product1
document.getElementById('product1').innerHTML =
    `<img src ="${product1.image}">
<h3>${product1.oldprice}</h3>
<p>${product1.price}</p>`;

product2
document.getElementById('product2').innerHTML =
    `<img src ="${product2.image}">
<h3>${product2.oldprice}</h3>
<p>${product2.price}</p>`;

product3
document.getElementById('product3').innerHTML =
    `<img src ="${product3.image}">
<h3>${product3.oldprice}</h3>
<p>${product3.price}</p>`;

product4
document.getElementById('product4').innerHTML =
    `<img src ="${product4.image}">
<h3>${product4.oldprice}</h3>
<p>${product5.price}</p>`;

product5
document.getElementById('product5').innerHTML =
    `<img src ="${product5.image}">
<h3>${product5.oldprice}</h3>
<p>${product5.price}</p>`;

product6
document.getElementById('product6').innerHTML =
    `<img src ="${product6.image}">
<h3>${product6.oldprice}</h3>
<p>${product6.price}</p>`;

product7
document.getElementById('product7').innerHTML =
    `<img src ="${product7.image}">
<h3>${product7.oldprice}</h3>
<p>${product7.price}</p>`;

product8
document.getElementById('product8').innerHTML =
    `<img src ="${product8.image}">
<h3>${product8.oldprice}</h3>
<p>${product8.price}</p>`;
