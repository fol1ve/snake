import { Snake } from './entities/snake.js';
import { Food } from './entities/food.js';
import { Starfield } from './engine/starfield.js';
import { Menu } from './ui/menu.js';
import { HUD } from './ui/hud.js';
import { GameOver } from './ui/gameover.js';
import { rInt } from './core/utils.js';
import { DIFF } from './core/config.js';

export class Game{
  constructor(canvas){
    this.ctx=canvas.getContext("2d");
    this.w=canvas.width;
    this.h=canvas.height;

    this.GW=30;
    this.CS=Math.floor(this.w/this.GW);
    this.GH=Math.floor(this.h/this.CS);

    this.snake=new Snake(this.GW,this.GH,DIFF.normal.speed);
    this.food=new Food(10,10);

    this.stars=new Starfield(100,this.w,this.h);
    this.menu=new Menu(this.w,this.h);
    this.hud=new HUD();
    this.gameover=new GameOver();

    this.state="menu";
    this.score=0;

    this.last=0;
    requestAnimationFrame(t=>this.loop(t));
  }

  loop(t){
    const dt=(t-this.last)/1000;
    this.last=t;

    this.update(dt);
    this.draw();

    requestAnimationFrame(t=>this.loop(t));
  }

  update(dt){
    if(this.state==="menu"){
      this.menu.update(dt);
      return;
    }

    if(this.state==="playing"){
      this.stars.update(dt);

      if(!this.snake.update(dt)){
        this.state="gameover";
        return;
      }

      const [hx,hy]=this.snake.body[0];
      if(hx===this.food.x && hy===this.food.y){
        this.score+=10;
        this.snake.grow+=2;
        this.food=new Food(rInt(0,this.GW),rInt(0,this.GH));
      }
    }
  }

  draw(){
    const ctx=this.ctx;

    ctx.fillStyle="#04040e";
    ctx.fillRect(0,0,this.w,this.h);

    this.stars.draw(ctx);

    if(this.state==="menu"){
      this.menu.draw(ctx,this.w,this.h);
      return;
    }

    if(this.state==="playing"){
      this.hud.draw(ctx,this.score);
      this.food.draw(ctx,this.CS);
      this.snake.draw(ctx,this.CS);
    }

    if(this.state==="gameover"){
      this.snake.draw(ctx,this.CS);
      this.gameover.draw(ctx,this.w,this.h,this.score);
    }
  }
}