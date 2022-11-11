
function preload(){
    img=loadImage('computer.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("COMPUTER",17,27);
    noFill();
    stroke("#FF0000");
    rect(10,15,625,390)
}