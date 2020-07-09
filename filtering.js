let img

function preload() {
  img = loadImage('e1e512e350288b28d7af.jpeg')
}

function setup() {
  createCanvas(400, 400)

  tint(222, 251, 250, 220)
  image(img, 0, 0)
}
