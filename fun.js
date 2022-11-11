
function preload(){
    img=loadImage('fan.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("FAN",9,27);
    noFill();
    stroke("#FF0000");
    rect(5,05,630,410)
}