export class GameOver{
  draw(ctx,w,h,score){
    ctx.fillStyle="rgba(0,0,0,0.6)";
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle="#ff4040";
    ctx.font="60px monospace";
    ctx.textAlign="center";
    ctx.fillText("GAME OVER",w/2,h/2);

    ctx.fillStyle="#fff";
    ctx.font="20px monospace";
    ctx.fillText("Score: "+score,w/2,h/2+40);
    ctx.fillText("Press SPACE",w/2,h/2+80);
  }
}