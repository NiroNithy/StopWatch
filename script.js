let timeDisplay=document.getElementById('wrapper');
let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
 let startTime=0;
 let stopTime=0;
 let currentTime=0;
 let pause=true;
 let IntervalId=0;
 let hours;
 let minutes;
 let seconds;
startbtn.addEventListener('click',()=>{
      if(pause){
        pause=false;
        startTime=Date.now()-stopTime;
        IntervalId=setInterval(updateTime,75);
      }
});
stopbtn.addEventListener('click',()=>{
     if(!pause){
        pause=true;
        clearInterval(IntervalId);
     }
})
resetbtn.addEventListener('click',()=>{
      pause=true;
      clearInterval(IntervalId);
      startTime=0;
      stopTime=0;
      currentTime=0;
      hours=0;
      minutes=0;
      seconds=0;
      timeDisplay.textContent="00:00:00";
})

function updateTime(){
    stopTime=Date.now()-startTime;

    seconds=padZero(Math.floor((stopTime/1000)%60));
    minutes=padZero(Math.floor((stopTime/(1000*60))%60));
    hours=padZero(Math.floor((stopTime/(1000*60*60))%60));
    

    timeDisplay.textContent=`${hours}:${minutes}:${seconds}`;
   
}
function padZero(num){
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}

