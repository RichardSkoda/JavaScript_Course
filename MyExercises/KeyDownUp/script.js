const body = document.querySelector('body');
const redSquare = document.querySelector('#red-square');

let newLeft = null;
let newTop = null;


body.addEventListener('keydown', function(event) {
  if(event.key === 'ArrowLeft') {
    newLeft -= 10 ;
    redSquare.style.left = newLeft + 'px';
  } else if(event.key === 'ArrowRight') {
    newLeft += 10
    redSquare.style.left = newLeft + 'px';
  } else if(event.key === 'ArrowUp') {
    newTop -= 10;
    redSquare.style.top = newTop + 'px'; 
  } else if(event.key === 'ArrowDown') {
    newTop += 10;
    redSquare.style.top = newTop + 'px';
  }
});