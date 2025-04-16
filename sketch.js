let particles = [];
let numParticles;


function setup() {
  createCanvas(windowWidth, windowHeight);
numParticles = 200
  
  for(i=0; i<numParticles; i++)
{
particles.push(new particle(width/2,height/2,random(2,6)));


}
  
  
  
}

function draw() {
  background(220);

for(i=0; i<numParticles; i++)
{
particles[i].display(random(10,20));
particles[i].update(1,3);
particles[i].keepInCanvas();
}
}
