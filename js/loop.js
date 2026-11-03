// FOR LOOP
// for(let x = 10; x < 20; x++){
//     console.log(`The Number is ${x}`)
// }

// for(let x = 10; x >= 0; x--){
//     console.log(`The Number is ${x}`)
// }

// for(let x = 100; x >= 10; x-=5){
//     console.log(x)
// }

// let number = Number(prompt("Enter a number:"));
// for (let i = 1; i <= 12; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
// }

// let studentNames = ['Timi', 'Jude', 'David', 'Godswill', 'Francis', 'Ayo', 'Ladi']
// for(let i = 0; i < studentNames.length; i++){
//     if(i == [3]){
//         console.log(`${studentNames[i]} is the valid person`)
//         // break
//         // continue
//     }
//     console.log(`Hello ${studentNames[i]}`)
// }

//  for(let i = studentNames.length-1; i >= 0; i--){ 
//         console.log(`Hello ${studentNames[i]}`)
//  }

// WHILE LOOP
// let b = 0;
// while(b <= 10){
//     console.log(b)
//     b++
// };

// let x = 10;
// while(x > 0){
    // console.log(x)
    // document.getElementById('num').innerHTML = x;
    // x--
// }

let courses = ['ADSE', 'Web','CyberSecurity', 'Ethical-Hacking']
let searchName = prompt('Enter Name');
let i = 0;
let found = false;

while (i < courses.length &&! found){
    if(courses[i] === searchName){
        console.log(searchName + " is in the available");
        found = true;
    }
    i++
}
if(!found) console.log('Courses are not found');

// DO WHILE LOOP
let z = 0;
do{
    console.log(z);
    z++
}while(z < 10)


    // forEach loop
 //  Array. forEach(function(currentValue, index){
 //      condition
 // })

 var shopCart =['Laptop', 'Mouse', 'iphone', 'keyboard','headphone']
 shopCart.forEach(function(gadget,index){
    console.log(`${index}: ${gadget}`)
 })

 const Numbers = [1,2,,34,5];
 Numbers.forEach(function(num){
    console.log(num * 10)
 });

 const cart = [
    {name: 'Laptop', price: 200000},
    {name: 'mouse', price: 5000},
    {name: 'Headphonne', price: 2000,}
]
let discountedCart =
carts.map(function(gadgets){
    return{
        price: gadgets.price *2,
        name: gadgets.name
    }
})
console.log(discountedCart)

// let numbers = [2, 4, 6, 8]:
// let result = numbers.map(function(num)){
//    return num * 2;
// });
console.log(result);

let studentNmaes = ['Timi', 'Jude', 'David', 'Ayo',];
let greetings = studentsNames.map(function(name) {
    return `Hello ${name}`;
});
console.log(greetings);
