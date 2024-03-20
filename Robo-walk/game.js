
const STEP = 64       // = width

let robotLeft = 3;





function renderForward(){
gameMap.innerHTML = `<div  class="robot" style="transform:translateX(${
  robotLeft * STEP
}px)"></div>`;

}
 renderForward();




function renderBackward() {
  gameMap.innerHTML = `<div  class="robot" style="transform:translateX(${
    robotLeft * STEP
  }px)"></div>`;
}
renderBackward();







let robot2Top = 2


function renderBottom() {
  gameMap2.innerHTML = `<div  class="robot2" style="transform:translateY(${
    robot2Top * STEP
  }px)"></div>`;
}
renderBottom();

function renderTop() {
  gameMap2.innerHTML = `<div  class="robot2" style="transform:translateY(${
    robot2Top * STEP
  }px)"></div>`;
}
renderTop();