export class Button{
  constructor(x,y,w,h,text){
    this.x=x; this.y=y;
    this.w=w; this.h=h;
    this.text=text;
    this.hover=0;
  }

  update(mx,my,dt){
    const inside = mx>=this.x && mx<=this.x+this.w &&
                   my>=this.y && my<=this.y+this.h;

    this.hover += ((inside?1:0)-this.hover)*dt*10;
  }

  draw(ctx){
    const t=this.hover;

    ctx.fillStyle="#111";
    ctx.fillRect(this.x,this.y,this.w,this.h);

    ctx.strokeStyle=`rgb(${100+155*t},255,150)`;
    ctx.strokeRect(this.x,this.y,this.w,this.h);

    ctx.fillStyle="#fff";
    ctx.textAlign="center";
    ctx.fillText(this.text,this.x+this.w/2,this.y+this.h/2+5);
  }

  hit(mx,my){
    return mx>=this.x && mx<=this.x+this.w &&
           my>=this.y && my<=this.y+this.h;
  }
}