const appendHr = document.getElementById("hr");
const appendMin = document.getElementById("min");
const appendSec = document.getElementById("sec");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");



let interval;

var hr = 0;
var min = 0;
var sec = 0;

function timer() {
   
    if (sec== 60) {
        sec = 0;
        min++;
    }else{
        sec++;
    }
    if (min==60) {
        hr++;
        min = 0;    
    }
    if (sec.toString().length == 1) {
        sec ="0" + sec.toString();
        // console.log(sec);
    }
    if (min.toString().length == 1) {
        min ="0" + min.toString();
        // console.log(min);
    }
    if (hr.toString().length == 1) {
        hr ="0" + hr.toString();
    }
            
   
    // console.log(hr.toString() + ":" + min.toString() + ":" + sec.toString());
    appendHr.innerText = hr.toString();
    appendMin.innerText = min.toString(); 
    appendSec.innerText = sec.toString();
}





buttonStart.onclick = function () {
    interval = setInterval(timer, 1000);
    // console.log("start");

};

buttonStop.onclick = function () {
    // console.log("stop");
    clearInterval(interval);
 
    
};

buttonReset.onclick = function () {
    // console.log("reset");
    if (interval) {
        clearInterval(interval);
    }
    hr = 0;
    min = 0;
    sec = 0;
    if (sec.toString().length == 1) {
      sec = "0" + sec.toString();
      // console.log(sec);
    }
    if (min.toString().length == 1) {
      min = "0" + min.toString();
      // console.log(min);
    }
    if (hr.toString().length == 1) {
      hr = "0" + hr.toString();
    }
    appendHr.innerText = hr.toString();
    appendMin.innerText = min.toString(); 
    appendSec.innerText = sec.toString();

    
};


