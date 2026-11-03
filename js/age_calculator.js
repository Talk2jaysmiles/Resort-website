let studentName = prompt('Enter your Name');
let studentBirthYear = prompt('Enter Your Birth Year');
let studentBirthMonth = prompt('Enter Your Birth Month');

// Current Year
let currentDate = new Date()
let currentYear = currentDate.getFullYear()

// Current Age
let studentAge = currentYear - studentBirthYear

// Display Data
document.getElementById('name').innerHTML = `Student Name: ${studentName}`;
document.getElementById('birthYear').innerHTML = `Birth Year:  ${studentBirthYear}`;
document.getElementById('birthMonth').innerHTML = `Student Month:  ${studentBirthMonth}`;
document.getElementById('age').innerHTML = `Age:  ${studentAge}`;

// Age Category
if(studentAge < 13){
    document.getElementById('category').innerHTML = 'Category: Child';
} else if(studentAge >=13 && studentAge <= 17){
        document.getElementById('category').innerHTML = 'Category: Teenager';
}else {
        document.getElementById('category').innerHTML = 'Category: Adult';
}
