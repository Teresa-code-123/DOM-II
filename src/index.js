import './less/index.less'

// Your code goes here!


//const busImage = document.querySelector('.intro');

const nav = document.querySelector('.nav-link');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
nav.addEventListener('click', () => {
    
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
})


// busImage.addEventListener('mouseenter', (event) => {
//  busImage.style.transform = "scale(.6)";
//  busImage.style.transition ="transform 1s";
// })
// busImage.addEventListener('mouseleave', () => {
//     busImage.style.transform = "scale(1)";
// })

// const logoHeading = documnet.querySelector('.logo-heading');

// logoHeading.addEventListener('mouseenter', (event) => {
//     logoHeading.style.color = 'hotpink';
// })