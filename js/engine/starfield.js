import { rand } from '../core/utils.js';

export class Starfield{
  constructor(n,w,h){
    this.w=w; this.h=h;
    this.s=[];
    for(let i=0;i<n;i++){
      this.s.push({
        x:rand(0,w),
        y:rand(0,h),
        sp:rand(5,20),
        ph:rand(0,Math.PI*2)
      });
    }
  }

  update(dt){
    for(const s of this.s){
      s.y+=s.sp*dt*0.2;
      s.ph+=dt*2;
      if(s.y>this.h){ s.y=0; s.x=rand(0,this.w); }
    }
  }

  draw(ctx){
    for(const s of this.s){
      const b=150*(0.5+0.5*Math.sin(s.ph));
      ctx.fillStyle=`rgb(${b/4},${b/4},${b})`;
      ctx.fillRect(s.x,s.y,2,2);
    }
  }
}