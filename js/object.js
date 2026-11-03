 let Product1 = {
   image: "/images/gshock.png",
   name: "red-heels",
   price: 250,
 }
let Product2 = {
    image: "/images/red-heels.png",
    name: "red shoe",
    price: 200,
}

 let Product3 = {
    image: "/images/shirt.png",
    name: "jordans",
    price: 180
}

 Product1
 document.getElementById('Product1').innerHTML =
     `<img src = "${Product1.image}">
 <h3>${Product1.name}</h3>
 <p>${Product1.price}</p>`;

 Product2
  document.getElementById('Product2').innerHTML =
     `<img src = "${Product2.image}">
<h3>${Product2.name}</h3>
<p>${Product2.price}</p>`;

 Product3
document.getElementById('Product3').innerHTML =
    `<img src = "${Product3.image}">
<h3>${Product3.name}</h3>
<p>${Product3.price}</p>`;

// let school = {
//    name: 'Aptech',
//    address: 'Thera Peace Zone',
//    state: 'Lagos-state',
//    years: 11,
//    course: ['ADSE', 'CPISM', 'DISM', 'Web with python'],
//    staff: [['Manager', 'HR'], 'Accountant', 'Councellor', 'Faculty', 'Security']
// }

// console.log(school)
// console.log(school.address)
// console.log(school.course[2])
// console.log(school.staff[0][0])

// using delete
// delete school.address
// console.log(school)

// const people = [const deletePeople = people.filter(person => person.id !== 1);
// const deletePeople = people.filter(function(person){
//    return person !== 1;

//  });
// console.log(deletePeople)


// Templates method
// let car = new Object()
//    car.color = 'red';
 //   car.brand = 'Toyota';
//    car.model = 2023;
 //   car.size = 'suv';
//    car.plateNumber = 'EPE3425';
 //

//    car.describe = function(){
//        return `My car is a ${this.color} ${this.brand}, It is a $
//        {this.model} ${this.size} with a plate number${this.
//        plateNumber}`;
 //   }
//    console.log(car)
 //   console.log(car.describe())

    // Template method
 //   function cars(name, color, brand, model, size, plateNumber){
 //   this.name = name
 //   this.color = color;
 //   this.brand = brand;
//   this.model = model;
//    this.size = size;
//    this.plateNumber = plateNumber;
 //   this.describe = function(){
 //       return `My ${name} is a ${this.color} ${this.brand}, It 
//        is a  ${this.model} ${this.size} with a plate number ${this.
//        plateNumbeer}`;
//    }
 //   }

//    var truck = new cars('Truck', 'black','ford', 2026, 'SUV',
//    'Jude-23456')
//    console.log(truck.describe())

