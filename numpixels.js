function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  
  loadPixels();
  let numPixels = pixels.length / 4;
  let step = 1 / numPixels * 255;
  
  for (let n = 0; n < numPixels; n++) {
    let col = n * step;
    pixels[n * 4] = col; 
    pixels[n * 4 + 1] = col; 
    pixels[n * 4 + 2] = col; 
    pixels[n * 4 + 3] = 255; 
    
}
  
  updatePixels(); 
  
}
