// without parameters
// function greetings(){
//     console.log('Good Afternoon')
// }
// greetings()

// function sum(){
//     var num1 =  parseInt(prompt('Enter the first Number'));
//     var num2 =  parseInt(prompt('Enter the second Number'));
//     var result = num1 + num2;
//     alert('The sum is: ' + result)
// }
// sum();

// with paramenter and arguments
//  function student(name1, name2){
//     console.log(`The student names are ${name1} and ${name2}`)
//  }
//  student('David', 'Ladi');

// function studentAge(age = 10, age2 = 24){
//     console.log(`Their ages are ${age} and ${age2} year old`)
// }
// studentAge()

// with return
// function add(a, b){
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result)


// function friends(){
// let firstFriend = 'Ayo'
// let secondFriend = 'Godswill'
// let twoFriends = `${firstFriend} and ${secondFriend} are freinds`
// return twoFriends
// }
// console.log(friends())

// // function expression
// let greet = function() {
//     console.log("Good morning!");
// };
// greet();


// let squareNumber = function(num) {
//     return num * num;
// };
// console.log(squareNumber(4));
// console.log(squareNumber(7));
// console.log(squareNumber(9));


// let numbers = [20, 40, 60, 80];
// let divideByFour = numbers.map(function(num){
//    return (num / 4)
    // return (num * 4)
    // return (num - 4)
    // return (num + 4)
// })
// console.log(divideByFour)
// arrow functions
// const info =: (firstName, lastName)=>{
//    return`${lastName} ${firstName}`
// }
// console.log(info('Francis', 'Ladi'))


// let square = num => num * num;
// console.log(square(5));


// VARIABLE SCOPE
//let x = 12;
//let y = 22;
//console.log(y)//glabal variable scope

// let name = 'David';
// function greet(){
 //   console.log(name)
// }
// greet()
// console.log(x)

// function showAge(){
 //    let age =23;
//     console.log(age)
// }
// showAge()

let userName = 'Aptech'
function login(){
   console.log(userName)
   let password = '1234'
   console.log(password)
}
login()
console.log(userName)

// Block variable

// if(true){
//   const course = 'javaScript';
//   console.log(course)
// }


