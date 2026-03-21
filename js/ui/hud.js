export class HUD{
  draw(ctx,score){
    ctx.fillStyle="rgba(0,0,0,0.4)";
    ctx.fillRect(0,0,ctx.canvas.width,40);

    ctx.fillStyle="#fff";
    ctx.fillText("Score: "+score,20,25);
  }
}