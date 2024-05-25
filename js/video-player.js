const myVideo = document.querySelector('#myvideo')
const btnPause = document.querySelector('#pause')
const sound = document.querySelector('#mute')
const playlist = ['video0','video1','video2']
const title_list = ['','момент с колобком','как баба яга превратилась в красотку']
const disc_list = ['0','как боролись с колобком','момент с водиным']
const src = document.querySelector('.video__src')
const title =  document.querySelector('.video__title')
const disc =  document.querySelector('.video__text')
let number = 0
console.log(btnPause , myVideo)
function play(){
    console.log("eeeeeeeeee")
    if (myVideo.paused) {
        myVideo.play()
     btnPause.innerText="пауза"
    } else {
        myVideo.pause()
        btnPause.innerText="продолжить"
    }
}
function mute(){
    if(myVideo.muted){
        myVideo.muted=false
        sound.innerHTML = "выключить"
    }else{
    myVideo.muted=true
    sound.innerHTML = "включить"
    }
}
function next(){
    number++
   
   
    if(number  > playlist.length -1){
        number = 0
       

   }
   myVideo.src = `video/${playlist[number]}.mp4`
   console.log(number)
   title.innerText = title_list[number]
   disc.innerText = disc_list[number]



}
function prev(){
    number--
   
   
    if(number  < 0){
        number = playlist.length -1
        
    console.log(number)

    }
    myVideo.src = `video/${playlist[number]}.mp4`
    title.innerText = title_list[number]
        disc.innerText = disc_list[number]
   


}
