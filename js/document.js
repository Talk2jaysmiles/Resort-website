// getElementById
let para = document.getElementById('paragraph')
para.style.color = 'red';

// getElementsByCLass
let btn = document.getElementsByClassName('btn')
for (let b = 0; b < btn.length; b++) {
    btn[b].style.backgroundColor = 'Black';
    btn[b].style.color = 'white';
    btn[b].style.padding = '10px';
    btn[b].style.borderRadius = '10px';
    btn[b].style.border = 'none';
    console.log(btn[b])
}

// getElementsByTagName
let input = document.getElementsByTagName('input')
for (let i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = 'red';
    input[i].style.padding = '10px 30px';
    input[i].style.borderRadius = '10px';
    input[i].style.border = 'none';
}

// byQuerySelector
const navLink = document.querySelector('.navlink .links')
navLink.style.color = 'red';


const navLink2 = document.querySelectorAll('.navlink2 .link2')
for (let l = 0; l < navLink2.length; l++) {
    navLink2[l].style.color = 'red';
    // navLink2[l].style.display = 'inline-block';
}

// // getElementById
// let para = document.getElementById('paragraph')
// para.style.color = 'red';

// // getElementsByCLass
// let btn = document.getElementsByClassName('btn')
// for(let b = 0; b < btn.length; b++){
//     btn[b].style.backgroundColor = 'Black';
//     btn[b].style.color = 'white';
//     btn[b].style.padding = '10px';
//     btn[b].style.borderRadius = '10px';
//     btn[b].style.border = 'none';
//     console.log(btn[b])
// }

// // getElementsByTagName
// let input = document.getElementsByTagName('input')
// for(let i = 0; i < input.length; i++){
//     input[i].style.backgroundColor = 'red';
//     input[i].style.padding = '10px 30px';
//     input[i].style.borderRadius = '10px';
//     input[i].style.border = 'none';
// }

// // byQuerySelector
// const navLink = document.querySelector('.navlink .links')
//     navLink.style.color = 'red';


// const navLink2 = document.querySelectorAll('.navlink2 .link2')
// for(let l = 0; l < navLink2.length; l++){
//     navLink2[l].style.color = 'red';
//     // navLink2[l].style.display = 'inline-block';
// }

// // Creating and Adding of Element

let body = document.body
body.style.margin = 0;
let div = document.createElement('div')
body.appendChild(div)
div.style.backgroundColor = 'Grey';
div.style.minHeight = '100vh';
let nav = document.createElement('nav')
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'space-between';
nav.style.boxShadow = '0 0 10px ';
nav.style.padding = '10px 20px';
div.appendChild(nav)
let img = document.createElement('img')
img.setAttribute('src', '/images/Aptech Logo.png')
img.style.width = '120px';
nav.appendChild(img)
let ul = document.createElement('ul')
ul.style.display = 'flex';
ul.style.gap = '40px';
ul.style.listStyle = 'none';
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let li4 = document.createElement('li')
nav.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
li1.textContent = 'Home';
li2.textContent = 'About Us';
li3.textContent = 'Contact Us';
li4.textContent = 'Services';
let input = document.createElement('input')
nav.appendChild(input)
input.setAttribute('type', 'search')
input.setAttribute('placeholder', 'Search...')
input.style.padding = '10px';
input.style.borderRadius = '10px';
input.style.border = 'none';
console.log(body)