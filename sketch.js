
function preload() {
  img_1 = loadImage("img/Thisis40sketch.png");
  img_2 = loadImage("img/Details.png");


}

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight*2);
  myCanvas.parent("main_section");
  background('yellow');

}

function draw() {
  background(color(31,41,55));
  image(img_1, 0,0,);  
  image(img_2, 0,windowHeight);  


}  
