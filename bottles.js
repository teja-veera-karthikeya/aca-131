
function preload(){
    img=loadImage('bottles.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("BOTTLES",17,27);
    noFill();
    stroke("#FF0000");
    rect(10,15,610,390)
}