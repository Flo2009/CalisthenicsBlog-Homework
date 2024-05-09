// Access multiple elements using .querySelectorAll()
// const divTags = document.querySelectorAll('div');
// const pTags = document.querySelectorAll('p');
const imgEl = document.querySelectorAll('img');
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';
//find out which HTML is calling
let docTitle = document.title
let docindex='Calisthenics-Blog'
let docBlog='CalisthenicsBlog-Display'


console.log(docTitle);


function htmlCheckImage1(){
  if (docTitle===docindex){
    imgEl[0].setAttribute('src', './assets/images/Sports.png');
    imgEl[0].setAttribute('class', 'image');
  }else if (docTitle===docBlog){
    imgEl[0].setAttribute('src', './assets/images/Sports.png');
    imgEl[0].setAttribute('style', 'background-image: url("./assets/images/Sports.png"); background-repeat: no-repeat; display: block; margin-left: auto; margin-right: auto; width: 50%; opacity: 0.2');
  }
}

function htmlCheckImage2(){
  if (docTitle===docindex){
    imgEl[0].setAttribute('src', './assets/images/Rings.png');
    imgEl[0].setAttribute('class', 'image');
  }else if (docTitle===docBlog){
    imgEl[0].setAttribute('src', './assets/images/Rings.png');
    imgEl[0].setAttribute('style', 'background-image: url("./assets/images/Rings.png"); background-repeat: no-repeat; display: block; margin-left: auto; margin-right: auto; width: 50%; max-height: 700px; opacity: 0.2');
  }
}

    

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    htmlCheckImage2();
    }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    htmlCheckImage1();
    }
});

htmlCheckImage1();