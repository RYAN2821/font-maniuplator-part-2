function setup(){
    video=createCapture(VIDEO);
    video.size(300,400);
    video.position(300,100);

    canvas=createCanvas(300,400);
    canvas.position(700,100);

    poseNet=ml5.poseNet(video,modleLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
 background("purple");   
}

function modleLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}
