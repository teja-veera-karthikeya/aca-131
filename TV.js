
function preload(){
    img=loadImage('tv.png');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("TV",17,27);
    noFill();
    stroke("#FF0000");
    rect(10,15,517,390)
}