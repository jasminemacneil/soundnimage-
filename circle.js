function setup() {
  createCanvas(400, 400);
  fill(0);
  noStroke();
}

function draw() {
  background(255);
  translate(width/2, height/2);
  
  let step = int(frameCount/30);
  

  for (let angle = 0; angle < 360; angle+=15) {
    let theta = radians(angle);
    let y = cos(theta) * 125;
    let x = sin(theta) * 125;
    
    if ((angle+ step * 15) %10==0) {
      fill(255);
    }else{
      fill(0);
      
    }
    ellipse(x,y,10,10);
    
  }
}
