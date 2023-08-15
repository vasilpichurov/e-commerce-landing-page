// Script for navigation bar
const bar = document.getElementById('bar')
const closeBtn = document.getElementById('close')
const nav = document.getElementById('navbar')


bar.addEventListener('click', ()=>{
    nav.classList.add('active')
})
closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('active')
})

