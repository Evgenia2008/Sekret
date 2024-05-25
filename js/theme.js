const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const navLinks = document.querySelectorAll('.nav__link')
const section = document.querySelectorAll('section')

let color = ''
let textcolor =''
if( localStorage.getItem('bg-color') != null){
    textcolor = localStorage.getItem('text-color')
    header.style.transition = color
    footer.style.background = color
    navLinks.forEach((el)=>{
        el.style.color = textcolor 
     })
     section.forEach((el)=>{
      
        el.style.background = color
    })

}
function choiceDark(){
    console.log('dark')
    
    header.style.transition = 'rgb(187,187,187)'
    footer.style.background = 'rgb(187,187,187)'
    
    header.style.transition = '1s ease'
    footer.style.transition = '1s ease'
    navLinks.forEach((el)=>{
        el.style.transition = '0,5s ease'
        el.style.color = 'white'
    })
    section.forEach((el)=>{
        el.style.transition = '0,5s ease'
        el.style.background = 'rgb(0,18,23)' 
    })

    localStorage.setItem('bg-color','rgb(0,18,23)')
    localStorage.setItem('text-color','white')

    
}
   function  choiceLight(){
    header.style.background = 'rgb(0,79,250)'
    footer.style.background = 'rgb(0,79,250)'
    header.style.transition = '1s ease'
    footer.style.transition = '1s ease'
    navLinks.forEach((el)=>{
        el.style.transition = '0,5s ease'
        el.style.color = 'white'
    })
    section.forEach((el)=>{
        el.style.transition = '0,5s ease'
        el.style.background = 'aqua' 
    })
    localStorage.setItem('bg-color','rgb(0,79,250)')
    localStorage.setItem('text-color','black')
   }

   
