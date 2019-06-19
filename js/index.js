// Your code goes here
// Variables
const header = document.querySelector('header');
const busPic = document.querySelector('.intro img');
const middlePics = document.querySelectorAll('.img-content img');
const title = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navArray = document.querySelectorAll('.nav a');
const botBtn = document.querySelectorAll('.btn')[1];
const home = document.querySelectorAll('.nav a')[0];
const input = document.createElement('input');
const body = document.querySelector('body');
const button = document.createElement('button');
// console.log(middlePics);
// console.log(nav);
// console.log(navArray);
// console.log(botBtn);
// console.log(home);
let randBgColors = function () {
  let rand1 = Math.floor(Math.random() * 256);
  let rand2 = Math.floor(Math.random() * 256);
  let rand3 = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  this.style.background = randomColor;
}

//Dom Changes
navArray[3].textContent = "Click Me";
header.style.zIndex = 1;
//Input styles
input.style.padding = '5px';
input.style.border = '2px solid lightgrey';
input.style.boxShadow = '0 2px 2px 2px grey';
input.style.borderRadius = '5px';
input.style.background = '#EBE3EC';
input.setAttribute('placeholder', 'Put your name in here!');
input.setAttribute('name', 'subject');
input.setAttribute('value', '');
//Button styles
button.style.padding = '10px';
button.style.marginLeft = '40%';
button.style.marginTop = '5px';
button.style.opacity = 1;
button.innerHTML = "Hold Down";

// Event Listeners
nav.addEventListener('click', event => {
  event.preventDefault();
});
// Window listener
window.addEventListener('load', event => {
  navArray.forEach(element => {
    element.style.padding = '5px';
    element.style.border = '1px solid black';
    element.style.boxShadow = '0 2px 2px 0';
    element.style.borderRadius = '5px';
  });
});
window.addEventListener('load', event => {
  document.querySelector('.content-destination').appendChild(button);
});
// Change BackgroundColor when Scrolling
body.addEventListener('wheel', randBgColors);
// Bus Picture
busPic.addEventListener('mouseover', event => {
  event.target.src = 'img/bus2.jpg';
  event.target.style.height = '240px';
  event.target.style.width = '100%';
});
busPic.addEventListener('mouseout', event => {
  event.target.src = 'img/fun-bus.jpg';
  event.target.style.height = 'auto';
});

// Middle Content Images
middlePics[0].addEventListener('mouseover', event => {
  event.target.style.transform = 'scale(1.2)';
  event.target.style.transition = 'all .3s';
});
middlePics[0].addEventListener('mouseout', event => {
  event.target.style.transform = 'scale(1.0)';
  event.target.style.transition = 'all .3s';
});
middlePics[1].addEventListener('mouseover', event => {
  event.target.style.transform = 'scale(.7)';
  event.target.style.transition = 'all .3s';
});
middlePics[1].addEventListener('mouseout', event => {
  event.target.style.transform = 'scale(1.0)';
  event.target.style.transition = 'all .3s';
});

// "FUN BUS" Title
title.addEventListener('click', event => {
  if(title.style.marginLeft == 0 || title.style.marginLeft == '0px'){
    let elem = event.target;
    let marg = 0;
    let id = setInterval(move, 3);
    function move() {
      if (marg === 300){
        clearInterval(id);
      } else {
        marg++;
        elem.style.marginLeft = marg + 'px';
      }
    }
  }
});
title.addEventListener('click', event => {
  if(title.style.marginLeft == '300px'){
    let elem = event.target;
    let marg = 300;
    let id = setInterval(move, 3);
    function move() {
      if (marg === 0){
        clearInterval(id);
      } else {
        marg--;
        elem.style.marginLeft = marg + 'px';
      }
    }
  }
});
//Scavenger hunt nested
navArray[3].addEventListener('click', event => {
  alert("Check the console.");
  console.log("Check the bottom of the page");
  botBtn.innerHTML = "Now Click Me!";

  botBtn.addEventListener('click', event => {
    alert("Go back top the top of the page.");
    document.querySelector('.intro h2').innerHTML = "if you can read this, click on 'Home'";
    document.querySelector('.intro h2').style.fontSize = '8px';

    home.addEventListener('click', event => {
      document.querySelector('body').style.background = '#DDD0DF';
      document.querySelector('.intro').appendChild(input);
      body.removeEventListener('wheel', randBgColors);

      // Events for the newly appended input
      input.addEventListener('focus', event => {
        input.style.background = '#AE81B5';
        input.style.color = 'white';
      });
      input.addEventListener('blur', event => {
        input.style.background = '#EBE3EC';
        input.style.color = 'black';
      });
      input.addEventListener('keypress', (e) => {
        let key = e.which || e.keyCode;
        if (key === 13){
          alert('Congratulations ' + input.value + ', you have won the scavenger hunt!');
          console.log(input.value);
        }
      });
      input.addEventListener('input', event => {
        console.log(input.value);
      });
    });
  });
});

//Button event listeners
buttonDown = function () {
  if (button.style.opacity >= 1){
    let elem = document.querySelector('.content-destination img');
    let opac = 1;
    let id = setInterval(move, 30);
    function move() {
      if (opac <= 0){
        clearInterval(id);
        opac = 0;
      } else {
        opac = opac - 0.05;
        elem.style.opacity = opac;
      }
      console.log(opac);
    }
  }
}
buttonUp = function() {
  button.removeEventListener('mousedown', buttonDown);
  if(button.style.opacity <= 1){
    let opac = button.style.opacity;
    let id = setInterval(move, 30);
    function move() {
      if (opac >= 1){
        clearInterval(id);
      } else {
        opac = opac + 0.05;
        button.style.opacity = opac;
      }
      console.log(opac);
    }
  }
}

button.addEventListener('mousedown', buttonDown);
button.addEventListener('mouseup', buttonUp);

// busPic.addEventListener('mouseout', fadeIn);

// function fadeOut() {
//   let opac = busPic.style.opacity;
//   let id = setInterval(frame, 5);
//   function frame(){
//     if (opac == 0){
//       clearInterval(id);
//     } else {
//       opac = opac - 0.05;
//       busPic.style.opacity = opac;
//     }
//   }
// }

// function fadeIn() {

// }