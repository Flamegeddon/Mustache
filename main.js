noseX = 0;
noseY = 0;
function preload(){
    clone_nose = loadImage('https://i.postimg.cc/J4kmW4pz/Yes.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();//itsays//
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('pose net is initialized')
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }//checks condition//
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clone_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('download.png');
}