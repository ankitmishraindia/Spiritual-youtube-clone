// menu button click
const menu=document.getElementById('menu');
const aside_long=document.getElementById('aside-long-div');
menu.addEventListener('click',()=>{
    aside_long.classList.toggle("hidden")
})
// notifications navbar
const notifications_icon=document.getElementById("notifications-icon")
const notifications_message=document.getElementById("notifications-message")
notifications_icon.addEventListener('click',()=>{
    notifications_message.classList.toggle("hidden")
})
// subscribe button clicked
const subscribe=document.getElementById('subscribe')
subscribe.addEventListener('click',()=>{
    subscribe.innerHTML='Subscribed'
    subscribe.style.backgroundColor='gray'
})
// showmore box click
const showmore_box=document.getElementById("showmore-box")
const showmore_text=document.getElementById("showmore-text")
const showmore=document.getElementById("showmore")
showmore_box.addEventListener('click',()=>{
    showmore_text.classList.toggle("hidden")
    if(showmore.innerHTML=="SHOW MORE")
    {
        showmore.innerHTML="Show Less.."
    }
    else{
        showmore.innerHTML="Show More"
    }
})