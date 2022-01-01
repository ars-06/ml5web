/* https://teachablemachine.withgoogle.com/models/JZCUbMuAw/ */

Webcam. set( { 
    width: 350,
     height: 300, 
    image_format :'png', 
    png_quality:90
});

camera = document.getElementById("Wview")
Webcam.attach('Wview')

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("Captured_img").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y2XauPsy9/model.json',modelLoaded());

function modelLoaded(){
    console.log("MODEL IS INITILIZED STARTING JET BOOSTERS IN: ");
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("TAKEOFF");
    }

    function Identify_image(){
        image = document.getElementById('captured_image')
        Classifier.classify(image,gotResult);
    }

    function gotResult(error,results){
if(error){
console.log(error);
window.alert("Error Detected !");
}
else{
    console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence*100).toFixed(2)+"%";
}
    }
