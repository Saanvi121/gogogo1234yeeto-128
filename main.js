hp = ""
pan = ""
chosen = ""
leftWristX = ""
leftWristY = ""
rightWristX = ""
rightWristY = ""

function preload() {

}


function setup() {
    canvas = createCanvas(600, 450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("MoDeL lOaDeD hUmAnS")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("Left wrist x = " + leftWristX)
        console.log("Left wrist y = " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("Right wrist x = " + rightWristX)
        console.log("Right wrist y = " + rightWristY)
    }
}


    function draw() {
        image(video, 0, 0, 600, 450)

        fill("red")
        stroke("black")
        circle(leftWristX, leftWristY, 20)
    
        fill("red")
        stroke("black")
        circle(rightWristX, rightWristY, 20)
    }

    //Add code to set chosen to hp or pan here

    function play() 
    {
        if (chosen == "hp")
        {
            hp.setVolume(1)
            hp.rate(1)
            pan.stop()
            hp.play()
        }
        if (chosen == "pan")
        {
            pan.setVolume(1)
            pan.rate(1)
            hp.stop()
            pan.play()
        }
    }
