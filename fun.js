img="";
Status="";
object = [];
percent="";
function preload(){
    img=loadImage('fan.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modeloaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";

}
function modeloaded(){
    console.log("model Loaded!");
    Status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
function draw(){
    image(img,0,0,640,420);
    if(Status != ""){
        for(i =0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(object[i].confidence*100);
            text(object[i].label+""+ percent+"%",object[i].x+15, object[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y ,object[i].width ,object[i].height)
        }
}
    
}