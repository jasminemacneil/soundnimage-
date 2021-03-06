function setup() {
  createCanvas(400, 400);
  pixelDensity(0.777);
  noLoop();
}

function draw() {
  
  loadPixels();
  
  let xdiv = 255 / width;
  let ydiv = 255 / height;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let c = index % 225 % x; 
      let v = index * 3 % index;
      pixels[index] = c;
      pixels[index + 1] = x / xdiv;
      pixels[index + 2] = y * ydiv;
      pixels[index + 3] = c % 255; 
      pixels[index + 4] = c % ydiv; 
      
  
    }
  }
  
  updatePixels();
}
