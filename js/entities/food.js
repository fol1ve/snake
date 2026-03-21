export class Food{
  constructor(x,y){
    this.x=x; this.y=y;
  }

  draw(ctx,cs){
    ctx.fillStyle="red";
    ctx.beginPath();
    ctx.arc(this.x*cs+cs/2,this.y*cs+cs/2,cs/3,0,Math.PI*2);
    ctx.fill();
  }
}