// nav-search box
var nav_search_div=document.getElementById('nav-search-div');
var nav_input=document.getElementById('input');
var search_input_box=document.getElementById('search-input-box')
nav_input.addEventListener('blur',()=>{
    nav_search_div.style.display='none';
    search_input_box.style.border='none'
})
nav_input.addEventListener('focus',()=>{
    nav_search_div.style.display='flex';
    search_input_box.style.border='2px solid skyblue'
    
})
// menu button click
const menu=document.getElementById('menu');
const aside_long=document.getElementById('aside-long-div');
const aside_short=document.getElementById('aside-short-div');
const main_right=document.getElementById('main-right-div');
menu.addEventListener('click',()=>{
    aside_long.classList.toggle("flex")
    aside_long.classList.toggle("hidden");
    aside_short.classList.toggle("hidden");
   main_right.classList.toggle('sm:pl-52')
})
// language show 
const nav_section=document.getElementById("nav-section");
const language=document.getElementById("language-icon")
const language_box=document.getElementById("language-box")
language.addEventListener('click',()=>{
    language_box.classList.toggle("hidden");
    
    
})
// change language of nav section 
const hindi_button=document.getElementById('hindi-button')
const english_button=document.getElementById('english-button');
hindi_button.addEventListener('click',()=>{
    nav_section.children[0].innerHTML='सभी'
    nav_section.children[1].innerHTML='सद्गुरु'
    nav_section.children[2].innerHTML='ज्ञान'
    nav_section.children[3].innerHTML='योग'
    nav_section.children[4].innerHTML='केंद्र'
    nav_section.children[5].innerHTML='कार्यक्रम'
    language_box.classList.add("hidden");
english_button.addEventListener('click',()=>{
    nav_section.children[0].innerHTML='All'
    nav_section.children[1].innerHTML='Sadhguru'
    nav_section.children[2].innerHTML='Wisdom'
    nav_section.children[3].innerHTML='Meditation and yoga'
    nav_section.children[4].innerHTML='Centers'
    nav_section.children[5].innerHTML='Events'
    language_box.classList.add("hidden");
})
})
// notifications
const notifications_icon=document.getElementById("notifications-icon")
const notifications_message=document.getElementById("notifications-message")
notifications_icon.addEventListener('click',()=>{
    notifications_message.classList.toggle("hidden")
})

