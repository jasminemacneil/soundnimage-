let osc, envelope;
var allBalls = [];

function setup() {
  createCanvas(200, 200);
  osc = new p5.SinOsc();
  osc.freq(440);

  envelope = new p5.Envelope();
  envelope.setADSR(0, 0.1, 0.1, 0.25);
  
  osc2 = new p5.SinOsc();
  osc2.freq(200);
  
  envelope2 = new p5.Envelope();
  envelope2.setADSR(2, 0.1, 0.1, 5.25);
  
  osc3 = new p5.SinOsc();
  osc3.freq(550);
  
  envelope3 = new p5.Envelope();
  envelope3.setADSR(7, 0.04, 0.1, 5.25);
  
  

}

function draw() {
  background(255);
  noStroke();

  if (frameCount % 60 === 0) {
    osc.start();
    envelope.play(osc, 0, 0.1);
     
    if (frameCount % 20 === 0) {
    osc2.start();
    envelope2.play(osc2, 0, 0.1);
   
      
    if (frameCount % 20 ===0) {
    osc3.start();
    envelope3.play(osc3, 1, 0.1, 0, 0);
    
      
    
    
    }
   }
  }
 }
