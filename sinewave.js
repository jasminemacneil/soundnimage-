function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

  translate(0, height / 2);
  scale(1, -1);
  
  let amplitude = 10;
  let frequency = 8;
  let phase = 0;
  
  beginShape();
  for (let x = 0; x < width; x+= 2) {
    let t = x / width; // between 0 and 1
    let y = sin(2 * PI * frequency * t + phase) * amplitude;
    vertex(x, y);
  }
  endShape();
}

 
