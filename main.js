noseX=0;
noseY=0;

function preload(){
mustach_filt = loadImage("https://i.postimg.cc/13r1xBSY/mostache.png")
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("poseNet model loaded!!")
}
function takeSnapshot(){
    save("clown_nose_filter.jpg")
}

function gotposes(results){
 
if(results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}


}

function draw(){
    image(video,0,0,300,300)
    image(mustach_filt,noseX-12,noseY,30,30)
    }
