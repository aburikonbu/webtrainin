const clockText=document.getElementById("clock")

function updateTime(){
    const time=new Date()
    clockText.textContent=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
}

setInterval(updateTime,1000)