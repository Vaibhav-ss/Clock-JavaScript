const UI={
    sec:document.querySelector('.hand-s'),
    min:document.querySelector('.hand-m'),
    hrs:document.querySelector('.hand-h')
}
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(()=>{ 
a=new Date();
date=a.toLocaleDateString(undefined,options);
time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
document.getElementById('time').innerHTML=time+" on "+date;
},1000);


function updateClock(){
    const now=new Date();
    const secs=(now.getSeconds()+now.getMilliseconds()/1000)/60*360;
    const mins=now.getMinutes()/60*360;
    const hrss=(now.getHours() + now.getMinutes()/60)/12*360;

    UI.sec.style.transform=`rotate(${secs}deg)`;
    UI.min.style.transform=`rotate(${mins}deg)`;
    UI.hrs.style.transform=`rotate(${hrss}deg)`;
    requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock)