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
// console.log(middlePics);
// console.log(nav);
// console.log(navArray);
console.log(botBtn);
console.log(home);

//Dom Changes
navArray[3].textContent = "Click Me";
header.style.zIndex = 1;
input.style.padding = '5px';
input.style.border = '2px solid lightgrey';
input.style.boxShadow = '0 2px 2px 2px grey';
input.style.borderRadius = '5px';
input.style.background = '#EBE3EC';
input.setAttribute('placeholder', 'Put your name in here!');
input.setAttribute('name', 'subject');
input.setAttribute('value', '');

// Event Listeners
nav.addEventListener('click', event => {
  event.preventDefault();
})
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

      input.addEventListener('focus', event => {
        input.style.background = '#AE81B5';
        input.style.color = 'white';
      });
      input.addEventListener('blur', event => {
        input.style.background = '#EBE3EC';
      });
      input.addEventListener('input', event => {
        alert('Congratulations ' + input.value + ', you have won the scavenger hunt!');
        console.log(input.value);
      });
      input.addEventListener('keyup', event => {
        console.log(input.value);
      });
    });
  });
});

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