import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

let x = 0;
let y = 0;
let cursor_item = document.getElementsByClassName("cursor_item")[0];
let mx = 0;
let my = 0;
let speed = 0.03;

window.onload = function() {
  let h1 = document.getElementsByTagName("h1")[0];
  window.addEventListener("click", mouseFunc, false);

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
    h1.innerHTML = "x : " + e.clientX + "y: " + e.clientY;
    console.log('mouse moved!!');
  }
  loop();
};

function loop(){
  mx += (x-mx) * speed;
  my += (y-my) * speed;
  cursor_item.style.transform = "translate("+mx +"px,"+my+ "px)";
  window.requestAnimationFrame(loop);
}
