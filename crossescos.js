function setup() {
  createCanvas(400, 400);
  fill(255);
  stroke(9);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  
  let ratio = frameCount * 0.01;

  for (let i = 0; i <= 250; i += 4) {
    let theta = radians(i * ratio);
    let x = cos(theta) * i / 1;
    let y = sin(theta) * i / 3;
    ellipse(x, y, 9, 1);
    ellipse(x, y, 1, 9);
  }
}
