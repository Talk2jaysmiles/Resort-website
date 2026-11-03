// const firstName = 'David';
// const firstname = 'Stella';
// let age = 10;
// console.log(firstname);
// document.getElementById('heading').innerHTML = firstName;

// comparison
// let number1 = 12;
// let number2 = 10;
// console.log(number <= number2)
// console.log(number == number2)
// console.log(number === number2)
// console.log(number != number2)
// console.log(number % number2)

// Concatenation
// const firstName = 'David';
// const lastName = 'Chinemerem David';
// let fullName = 'Hello ' + lastName + " " + firstName;
// console.log(fullName);
// console.log(lastName + " ".concat(firstName))
// console.log(`Hello ${lastName} ${firstName}, you are welcome.`)
// console.log(lastName.length)
// console.log(firstName.indexOf('v'))

// ARRAY
// let studentNames = ['David', 'Nmesoma', 'Pelumi', 'Godswil', 'Jude'];
// console.log(studentNames)
// console.log(studentNames.length)
// console.log(studentNames.indexOf('David'))
// console.log(studentNames.includes('Ayo')) //to know if the element is available
// console.log(studentNames.push('Ayo')) //add as last value
// console.log(studentNames.pop('Ayo')) //remove last value
// console.log(studentNames[4])
// console.log(studentNames.unshift('Oscar')) //add first value
// console.log(studentNames.shift('David')) //remove first value
// console.log(studentNames.splice(2, 1)) //removing value from specific position
// console.log(studentNames.splice(0, 1,'Oscar')) //adding value to specific position

// && Ampersand and 
// || Pipe or



// let date = new Date()
// console.log(date)
// console.log(date.getFullYear())
// document.getElementById('date').innerHTML = date;
// console.log(date.getMonth())
// const monthNames = ['January', 'February', 'March', 'April', 'May', 'june', 'july']
// const MonthName = monthNames[date.getMonth()];
// console.log(MonthName)
// console.log(monthNames[date.getMonth()])
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getHours())


// let month = date.setMonth(11)
// let date2 = date.setDate(25)
// let year = date.setFullYear(2025)
// console.log(date)

// let date3 = date.getDate()
// let month2 = date.getMonth()
// let year2 = date.getFullYear()
// console.log(`${date3}-${month2}-${year2}`)

// CONDITIONAL STATEMENT ///////
//  let firstName = 'Stella'
//  if(firstName == 'Stella'){
//     console.log('True')
//  }else{
//     console.log('false')
//  }

//  let lastName = prompt('Enter your lastname');
//  if(lastName == 'Damilola'){
//     console.log('Valid')
//  }else{
//     console.log('invalid')
//  }

//  let score = prompt('Enter student score');
//  if (score >= 70 && score <= 100){
//     console.log("Your grade is A")
//  }else if(score >= 60 && score <= 69){
//         console.log("Your grade is B")
//  }else if(score >= 50 && score <= 59){
//         console.log("Your grade is C")
//  }else if (score >= 40 && score <= 49){
//         console.log("Your grade is D")
//  }
//  else if(score <= 39){
//         console.log("Your grade is F")
//  }
//  else{
//     console.log('Invalid score')
//  }

//  SWITCH CASE 
let aptechStuudents = prompt('Enter Students Name')
switch (aptechStuudents) {
       case 'Godwill':
       case 'Ayo':
            //   console.log(`${aptechStuudents} is an ADSE Student`)
            alert(`${aptechStuudents} is an ADSE Student`)
              break
       case 'David':
       case "Pelumi":
       case 'Ladi':
       case 'Jude':
            //   console.log(`${aptechStuudents} is a Web with Python Student`)
            alert(`${aptechStuudents} is a Web with Python Student`)
              break
       case 'Oscar':
       case 'Anthony':
       case 'Clinton':
       case 'Nmesoma':
       case 'Timi':
            //   console.log(`${aptechStuudents} is a Web design Student`)
            alert(`${aptechStuudents} is a Web design Student`)
              break
              default:
                    //  console.log(`${aptechStuudents} is invalid`)
                    alert(`${aptechStuudents} is invalid`);
}
