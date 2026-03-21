import { Game } from './game.js';

const canvas=document.getElementById("c");

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
window.addEventListener("resize",resize);
resize();

const game=new Game(canvas);

canvas.addEventListener("mousemove",e=>{
  game.menu.mouse.x=e.clientX;
  game.menu.mouse.y=e.clientY;
});

canvas.addEventListener("click",()=>{
  if(game.state==="menu"){
    const act=game.menu.click();
    if(act==="play") game.state="playing";
  }
});

window.addEventListener("keydown",e=>{
  if(game.state==="playing"){
    if(e.key==="ArrowUp") game.snake.turn([0,-1]);
    if(e.key==="ArrowDown") game.snake.turn([0,1]);
    if(e.key==="ArrowLeft") game.snake.turn([-1,0]);
    if(e.key==="ArrowRight") game.snake.turn([1,0]);
  }

  if(game.state==="gameover" && e.code==="Space"){
    location.reload();
  }
});