// 最終課題を制作しよう
let gameStarted = false;
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(160, 192, 255);

  if(gameStarted === false) {
    const t = "ゲームスタート";
    if(mouseIsPressed){
      moji(40, t , width / 2, height / 2);
    } else {
      moji(32, t , width / 2, height / 2);
    }
  } else {
    for(let i = 0; i < balls.length; i++) {
      let b = balls[i];
      fill(255);
      ellipse(b.x, b.y, b.size);
      b.x += b.vx;
      b.y += b.vy;
    }

    const ballsInCanvas = [];
    for(let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if(b.x > -50 && b.x < width + 50 && b.y < height + 50){ 
        ballsInCanvas.push(b);
      }
    }
    balls = ballsInCanvas;

    if(frameCount % 10 === 0) {
      const y_b = random(30, height - 30);
      const b = { x: width, y: y_b, size: 70, vx: -10, vy:0 };
      balls.push(b);
    }

    person();

    for(let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if(dist(mouseX, mouseY, b.x, b.y) < (b.size + 100) / 2) {
        balls = [];
        textSize(64);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        text("ゲームオーバー", width / 2, height / 2);
        moji(32,"リロードしてもう一度", width / 2, height / 2 + 80);
        noLoop();
      }
    }
  }

}


function mouseReleased() {
  if(gameStarted === false) { 
    gameStarted = true;
  }
}

function moji(textsize, t, x, y) {
  textSize(textsize);
  const w = textWidth(t); // テキストの幅
  const h = textAscent(t) + textDescent(t); // テキストの高さ
  const p = 8; // 余白の大きさ (padding)

  push();
  fill(0);
  rectMode(CENTER);
  rect(x, y, w + p * 2, h + p * 2, 16);

  textAlign(CENTER, CENTER);
  fill(255);
  text(t, x, y);
  pop();
}

function person() {
  fill(0);
  ellipse(mouseX, mouseY, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

