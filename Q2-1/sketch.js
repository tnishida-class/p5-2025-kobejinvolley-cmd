// 小手調べ
function setup(){
  createCanvas(200, 200);
  noFill();
  for(let i = 0; i < 10; i++){
    let size = (i + 1)*20;
    if(i < 5){
      stroke(255,0,0);
    } else {
      stroke(0,0,255);
    }
    ellipse(100, 100, size, size);
  }
}
