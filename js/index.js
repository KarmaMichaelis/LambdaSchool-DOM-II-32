// Your code goes here

//changes big bus image
const busImage=document.querySelector('.intro img')

function imageSwitch(event){
    busImage.setAttribute('src','https://media.giphy.com/media/J4tKwYHp0DFC8MEY2K/giphy.gif')
}

busImage.addEventListener('click',imageSwitch)

//////next event
//changes logo style
const logoRotation=document.querySelector('.logo-heading')


logoRotation.addEventListener('mouseover',function(event){
    event.target.style.transform='rotate(75deg) '
    event.target.style.color='yellow'
})

//next event
//changes background color when double clicked
const colorChange=document.querySelector('body')

colorChange.addEventListener('dblclick',function(event){
    event.target.style.background='limegreen'
})

//next event
