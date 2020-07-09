function setup() {
	createCanvas(windowHeight, windowHeight);
	background(100);
	rectMode(CENTER);
}

function draw() {

	circs(width / 2, height / 2, width);
}


function circs(x, y, w) {

	circle(x, y, w);
	if (w / 3 > 5) {
		for (let i = -1; i < 2; i++) {
			for (let n = -1; n < 2; n++) {
				
				if(i!=0 ||n!=0)		circs(x + i * w / 3, y + n * w / 3, w / 3);
			}
		}
		// circs(x, y - w / 3, w / 3);
		// 		circs(x, y + w / 3, w / 3);
		// 		circs(x + w/3, y - w / 3, w / 3);
		// 		circs(x - w/3, y - w / 3, w / 3);



	}

}
