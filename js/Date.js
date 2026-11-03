//    correction

// using array
// let month = prompt('Enter Month');
// let month31 = ['Januray', 'March', 'May', 'July', 'August', 'October', 'December'];
// let month30 = ['April', 'June', 'September', 'November'];
// if (month31.includes(month)){
//     alert(`${month} has 31 days`)
// } else if (month30.includes(month)){
//     alert(`${month} has 30 days`)
// }else if(month === 'February'){
//         let year = prompt("Enter Year");

//     if(year % 4 === 0){
//         alert(`${month} has 29 days because ${year} is a leap year`)
//     } else{
//         alert(`${month} has 28 days because ${year} is not a leap year`)
//     }
// }else{
//     alert(`${month} is an invalid month`)
// }

// Switch Case
let month = prompt('Enter Month')
switch (month) {
    case 'Januray':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        alert(`${month} has 31 days`)
        break
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        alert(`${month} has 30 days`)
        break
    case 'February':
        let year = prompt('Enter Year')
        if (year % 4 === 0) {
            alert(`${month} has 29 days because ${year} is a leap year`)
        } else {
            alert(`${month} has 28 days because ${year} is not a leap year`)
        }
        break
    default:
        alert(`${month} is an invalid month`)
}