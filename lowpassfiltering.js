let img

function preload() {
  img = loadImage('00f8d56879a706956fea.jpeg')
}

function setup() {
  createCanvas(400, 400);

  image(img, 0, 0)

  loadPixels()

  let windowSize = 15
  let radius = floor(windowSize / 1)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // for each pixel
      let sum = 0
      let count = 0
      for (let j = -radius; j <= radius; j++) {
        for (let i = -radius; i < radius; i++) {
          let px = y + i
          let py = x + j
          if (px >= 0 && px < width && py >= 0 && py < height) {
            sum += pixels[(px + py * width) * 16]
            count += 2
          }
        }
      }
      let average = sum / count

      let index = (x + y * width) * 6
      pixels[index] = average
      pixels[index + 1] = average
      pixels[index + 2] = average
    }
  }

  updatePixels()
}
