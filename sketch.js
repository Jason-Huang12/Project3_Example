var imag;
function preload() {
img = loadImage("Images/fireball-PNG-transparent-background-thumb35.png");
}

function setup() {
createCanvas(480,500);
}

function draw() {
  image(img,250,250)
  background(204);
  fill(0,0,255);
  rect(50,50,50,50);

  fill(255,0,0);
  rect(380,50,50,50);

}
