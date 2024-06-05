const open =document.querySelector('.fa-bars')
const close =document.querySelector('.fa-xmark')

open.addEventListener('click',()=>{
    console.log("fjhuiehfui")
    document.querySelector('.closeSlidebar').style.display ='inline-block'
})
close.addEventListener('click',()=>{
    console.log("fjhuiehfui")
    document.querySelector('.closeSlidebar').style.display ='none'
})