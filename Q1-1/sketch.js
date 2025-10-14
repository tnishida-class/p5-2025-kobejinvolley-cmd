// 神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

 noFill();
  strokeWeight(25);
  stroke(0);
  strokeCap(SQUARE);
  arc(100 - 28, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1] 空欄を埋めて神戸市のロゴマークを完成させよう
}
