
function preload(){
    img=loadImage('phone.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("PHONE",200,27);
    noFill();
    stroke("#FF0000");
    rect(200,15,217,390)
}