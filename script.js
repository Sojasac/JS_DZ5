var flag = false;
var timeString;
var time = [0,0,0,0];
var stateChange = document.querySelector('#stateChange');
var reset = document.querySelector('#reset');
var split = document.querySelector('#split');
var RAF = ["0","0","0","0"];
var text = document.getElementsByTagName("h4")


stateChange.addEventListener("click", stateChangeTimer);
reset.addEventListener("click", resetTimer);
split.addEventListener("click", splitTimer);


function stateChangeTimer(){
    var startTime = function(){
        time[0]++;
        getTime();
        document.querySelector('#sekbody tt').innerHTML = timeString;
    }
    if(flag == false){
        link = setInterval(startTime, 10);
        stateChange.innerHTML = "Пауза";
        stateChange.className = "Pause";
        stateChange.id = "pause";
        flag = true;
    }
    else{
        clearInterval(link);
        stateChange.innerHTML = "Старт";
        stateChange.className = "Start";
        stateChange.id = "start";
        flag = false;
    }
}

function getTime(){
    if(time[0] > 99){
        time[1]++;
        time[0] = 0;
        if(time[1] > 59){
            time[2]++;
            time[1] = 0;
            if(time[2] > 59){
                time[3]++;
                time[2] = 0;
            }
        }
    }
    for(var i = 0; i < time.length; i++){
        if(time[i]<10)
            RAF[i] = "0";
        else
            RAF[i] = "";
    }
    timeString = RAF[3] + time[3] + ":" +RAF[2] + time[2] + ":" +RAF[1] + time[1] + "." + RAF[0] + time[0];
    console.log(timeString);
}




  
function splitTimer(){
    if(document.querySelector('#sekbody tt').innerHTML != "00:00:00.00" && flag == true){
        
        var lapContainer = document.getElementById("lapContainer");
        var interval = document.createElement("div");
        interval.className = "lapContain";
        interval.innerHTML = /*'1    ' +*/ document.querySelector('#sekbody tt').innerHTML;
        lapContainer.appendChild(interval);
    }
}

 
function resetTimer(){
    var lapContainer = document.getElementById("lapContainer");
    lapContainer.innerHTML = "";
    flag = true;
    stateChangeTimer();
    document.querySelector('#sekbody tt').innerHTML = "00:00:00.00";
    stateChange.innerHTML = "Старт";
    time = [0,0,0,0];
    
}