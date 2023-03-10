let vehicle;
let target;

function setup() {
  background(100);
  createCanvas(500, 500);
  vehicle = new Vehicle(250, 250);
}


function draw() {
  //noLoop();
  background(50);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  circle(target.x, target.y, 32)
  
  vehicle.seek(target);
  vehicle.update();
  vehicle.show();

  
}