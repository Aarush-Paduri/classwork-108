function SoundIdentify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classify1 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yoj0ECb4n/model.json', modelLoaded)
}

function modelLoaded(){
    classify1.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
    console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random() * 255) +1;
        random_g = Math.floor(Math.random() * 255) +1; 
        random_b = Math.floor(Math.random() * 255) +1; 
        document.getElementById("hear").innerHTML = "I can hear:" + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy:" + (results[0].confidence*100).toFixed(2) +"%";
        document.getElementById("hear").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";
        img = document.getElementById("alien_1");
        img1 = document.getElementById("alien_2");
        img2 = document.getElementById("alien_3");
        img3 = document.getElementById("alien_4");

        if(results[0].label == "clap"){
            img.src = "aliens-01.gif"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }
        else if(results[0].label == "Background Noise"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.gif"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }
        else if(results[0].label == "bang"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.gif"
            img3.src = "aliens-04.png"
        }
        else{
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.gif"
        }
    }
}