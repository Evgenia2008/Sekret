function currentTime(){
    let date=new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    const clock = document.querySelector('.time')
    clock.innerHTML=hour+':'+min +':'+sec 
    setTimeout(currentTime,1000) 
}

currentTime()