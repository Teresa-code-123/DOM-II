import './less/index.less'

// Your code goes here!


const busImage = document.querySelector('.intro img');

const nav = document.querySelector('.nav-link');

const changeImage = document.querySelector('logo-heading ')


function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
nav.addEventListener('click', () => {
    
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.color = rndCol;
})


busImage.addEventListener('mouseenter', (event) => {
 busImage.style.transform = "scale(.6)";
 busImage.style.transition ="transform 1s";
})
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)";
})

