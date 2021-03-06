let walls = [0, 0, 0];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < walls.length; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));
  particle = new Particle();
  
}

function draw() {
  let strokeColorArray = [
    Math.floor(random(255)),
    Math.floor(random(255)),
    Math.floor(random(255))
  ];
  background(0);
  for (let wall of walls) {
    wall.show();
    wall.updateStrokeColor(strokeColorArray);
  }
  //particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.updateStrokeColor(strokeColorArray)
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
}
