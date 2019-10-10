var img;
function preload() {
img = loadImage("Images/fireball-PNG-transparent-background-thumb35.png");
}

function setup() {
createCanvas(480,480);
image(img,250,250);
}

function draw() {
  background(204);
  fill(0,0,255);
  rect(50,50,50,50);
  fill(255,0,0);
  rect(380,50,50,50);

}
