import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.1;

let h1;
let first;
let second;
let third;
let fourth;
let vod;

window.onload = function() {
  h1 = document.getElementsByTagName("h1")[0];
  first = document.getElementsByClassName("first")[0];
  second = document.getElementsByClassName("second")[0];
  third = document.getElementsByClassName("third")[0];
  fourth = document.getElementsByClassName("fourth")[0];
  vod = document.getElementsByClassName("vod")[0];

  window.addEventListener("mousemove", mouseFunc, false);

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
  }
  loop();
};

function loop(){
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  h1.innerHTML = "x : " + x + "y: " + y;
  second.style.transform = "translate("+mx/120 +"px,"+my/120+ "px)";
  third.style.transform = "translate("+mx/-10 +"px,"+my/-10+ "px)";
  fourth.style.transform = "translate("+mx/-7 +"px,"+my/-7+ "px)";
  vod.style.transform = "translate("+mx/-70 +"px,"+my/-70+ "px)";

  window.requestAnimationFrame(loop);
}
