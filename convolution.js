var CONVinputA = []
var CONVinputB = []
var CONVinputC = []
var CONVfunction = []

var rendernum = 0


function setup() {
	frameWidth = 1024;
	frameHeight = 768;
	createCanvas(frameWidth, frameHeight);
	background(100);
	noStroke()
	
	noiseSeed(random(10000))
	randomSeed(random(10000))
	
	for(i=0;i<20;i++)
	{
		CONVinputA[i] = floor(random(5))
		CONVinputB[i] = floor(5+random(2))
		CONVinputC[i] = floor(random(10))
		CONVfunction[i] = floor(random(8))
	}
	
	colorMode(HSB,1)
	pigmentA = color(random(1),1-sq(random(1)),1-sq(random(1)))
	pigmentB = color(random(1),1-sq(random(1)),1-sq(random(1)))
	pigmentC = color(random(1),1-sq(random(1)),1-sq(random(1)))
	pigmentD = color(random(1),1-sq(random(1)),1-sq(random(1)))
	colorMode(RGB,256)
	
	rendernum = 0
}

function mousePressed()
{
	if (mouseX < width / 2){
		fill(0);
	  //rect(0,0,frameWidth,frameHeight)
	  setup()
	}else{
    save('pix.jpg');
	}
}

function draw() {
if (rendernum++ == 0)
for(ix=0;ix<frameWidth;ix+=10)
for(iy=0;iy<frameHeight;iy+=10)
	{
			var neuron = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			var xcoord = ix/frameWidth
			var ycoord = iy/frameHeight
			neuron[0] = xcoord
			neuron[1] = ycoord
			neuron[2] = sqrt((sq(xcoord)+sq(ycoord))/2)
			neuron[3] = sqrt((sq(xcoord-.5)+sq(ycoord-.5))*2)
			neuron[4] = abs(sin(3*xcoord+5*ycoord))
			neuron[5] = min(1,max(0,abs(ycoord-.5)*10-2))
			neuron[6] = noise(xcoord*5 ,ycoord*5)
			neuron[7] = noise(xcoord*2+10 ,ycoord*2)
			neuron[8] = 1/(1+25*abs(0.5-noise(xcoord*4 ,ycoord*4+10)))
			neuron[9] = noise(xcoord*15+10 ,ycoord*15+10)
			
			for(i=0;i<20;i++)
			{
				var inputA = neuron[i+CONVinputA[i]]
 				var inputB = neuron[i+CONVinputB[i]]
 				var inputC = neuron[i+CONVinputC[i]]
				
				switch (CONVfunction[i])
				{
					case 0: //adding values A and B and taking the average
 				 	neuron[i+10] = (inputA+inputB)/2 ; break;
   				
					case 1: //multiplying values A and B and taking the square root
  				neuron[i+10] = sqrt(inputA*inputB) ; break;    
  				
					case 2: //using value C to determine if A or B should be outputted
  				neuron[i+10] = inputC > .5 ? inputA : inputB ; break;
					
					case 3: //using value C to interpolate between A and B
					neuron[i+10] = lerp(inputA,inputB,inputC) ; break;
					
					case 4: //taking the difference between A and B, offset by 0.5
					neuron[i+10] = (inputA-inputB)/2+0.5 ; break;

					case 5: //taking the distance between A and B, subtracted from 1
					neuron[i+10] = 1-abs(inputA-inputB) ; break;

					case 6: //find Perlin noise with coordinates offset by A and B
					neuron[i+10] = noise((xcoord+inputA)*5,(ycoord+inputB)*5+10*i) ; break;

					case 7: //same as above, but multiplying the noise by input C
					neuron[i+10] = inputC*noise((xcoord+inputA)*5+10*i,(ycoord+inputB)*5) ; break;
				}
			}
		
			
			colorAB = lerpColor(pigmentA,pigmentB,neuron[27])
			colorCD = lerpColor(pigmentC,pigmentD,neuron[28])
			colorABCD = lerpColor(colorAB,colorCD,neuron[29])
			
			colred = red(colorABCD)+32-64*neuron[23]
			colgreen = green(colorABCD)+32-64*neuron[23]
			colblue = blue(colorABCD)+32-64*neuron[23]
			
			fill(color(colred,colgreen,colblue,75))
    	brush(ix,iy);
		}
	}

function brush(nx,ny) {
	maxradius = 15
	beginShape(TRIANGLE_FAN) 
	vertex(nx,ny)
	for(angle=0;angle<=PI*4;angle++)
	{
	  length = maxradius*(.25+random(1.5)) ;
	  vertex(nx+length*cos(angle),ny+length*sin(angle)) ; 
	}
	endShape()
}
