export class Snake{
  constructor(gw,gh,speed){
    const sx=Math.floor(gw/2), sy=Math.floor(gh/2);
    this.body=[[sx,sy],[sx-1,sy],[sx-2,sy]];
    this.dir=[1,0];
    this.next=[1,0];
    this.timer=0;
    this.delay=speed;
    this.gw=gw; this.gh=gh;
    this.grow=0;
  }

  turn(d){
    if(d[0]!==-this.dir[0]||d[1]!==-this.dir[1])
      this.next=d;
  }

  update(dt){
    this.timer+=dt;
    if(this.timer>=this.delay){
      this.timer=0;
      return this.step();
    }
    return true;
  }

  step(){
    this.dir=this.next;
    const [hx,hy]=this.body[0];
    const nx=(hx+this.dir[0]+this.gw)%this.gw;
    const ny=(hy+this.dir[1]+this.gh)%this.gh;

    for(const b of this.body.slice(1)){
      if(b[0]===nx && b[1]===ny) return false;
    }

    this.body.unshift([nx,ny]);
    if(this.grow>0) this.grow--;
    else this.body.pop();

    return true;
  }

  draw(ctx,cs){
    ctx.fillStyle="#00ff80";
    for(const [x,y] of this.body){
      ctx.fillRect(x*cs,y*cs,cs,cs);
    }
  }
}