// Your code goes here
// Variables
const busPic = document.querySelector('.intro img');
const middlePics = document.querySelectorAll('.img-content img');
const title = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
console.log(middlePics);
console.log(nav);

// Event Listeners
nav.addEventListener('click', event => {
  event.preventDefault();
})
busPic.addEventListener('mouseover', event => {
  event.target.src = 'img/bus2.jpg';
  event.target.style.height = '240px';
  event.target.style.width = '100%';
});
busPic.addEventListener('mouseout', event => {
  event.target.src = 'img/fun-bus.jpg';
  event.target.style.height = 'auto';
});

middlePics[0].addEventListener('mouseover', event => {
  event.target.style.transform = 'scale(1.2)';
  event.target.style.transition = 'all .3s';
});

middlePics[0].addEventListener('mouseout', event => {
  event.target.style.transform = 'scale(1.0)';
  event.target.style.transition = 'all .3s';
});
console.log(title);

title.addEventListener('click', event => {
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