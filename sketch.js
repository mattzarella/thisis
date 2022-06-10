
function preload() {
  img_1 = loadImage("img/IMG_2884.jpeg");
  

}

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("main_section");
  background('yellow');

}

function draw() {
  background('green');
  image(img_1, 0,windowHeight/4,300,500);  


}  
