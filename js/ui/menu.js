import { Button } from './button.js';

export class Menu{
  constructor(w,h){
    this.buttons=[
      new Button(w/2-150,h/2-60,300,50,"PLAY"),
      new Button(w/2-150,h/2+10,300,50,"EXIT")
    ];
    this.mouse={x:0,y:0};
  }

  update(dt){
    for(const b of this.buttons){
      b.update(this.mouse.x,this.mouse.y,dt);
    }
  }

  draw(ctx,w,h){
    ctx.font="60px monospace";
    ctx.fillStyle="#00ff80";
    ctx.textAlign="center";
    ctx.fillText("SNAKE",w/2,h/3);

    for(const b of this.buttons){
      b.draw(ctx);
    }
  }

  click(){
    if(this.buttons[0].hit(this.mouse.x,this.mouse.y)) return "play";
    if(this.buttons[1].hit(this.mouse.x,this.mouse.y)) return "exit";
  }
}