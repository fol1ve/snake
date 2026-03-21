export class Particle{
  constructor(x,y){
    this.x=x; this.y=y;
    this.vx=Math.random()*200-100;
    this.vy=Math.random()*200-100;
    this.life=1;
  }

  update(dt){
    this.x+=this.vx*dt;
    this.y+=this.vy*dt;
    this.life-=dt;
    return this.life>0;
  }

  draw(ctx){
    ctx.globalAlpha=this.life;
    ctx.fillRect(this.x,this.y,3,3);
    ctx.globalAlpha=1;
  }
}