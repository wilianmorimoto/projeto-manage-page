const main = document.querySelector('main')
const menuIcon = document.querySelector('#menu-icon')
const nav = document.querySelector('nav')
const bgMenu = document.querySelector('.bg-menu')
const links = document.querySelectorAll('nav ul li a')

menuIcon.addEventListener('click', () => {
    if (!nav.classList.contains('show')) {
        nav.classList.add('show')
        menuIcon.src = 'images/icon-close.svg'
        bgMenu.classList.add('show')
    } else {
        nav.classList.remove('show')
        menuIcon.src = 'images/icon-hamburger.svg'
        bgMenu.classList.remove('show')
    }
})

main.addEventListener('click', () => {
    nav.classList.remove('show')
    menuIcon.src = 'images/icon-hamburger.svg'
    bgMenu.classList.remove('show')
})

links.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('show')
    menuIcon.src = 'images/icon-hamburger.svg'
    bgMenu.classList.remove('show')
}))

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        nav.classList.remove('show')
        bgMenu.classList.remove('show')
        menuIcon.src = 'images/icon-hamburger.svg'
    }
})


const radio = document.querySelector('.manual-btn')
let cont = 1

setInterval(slideImg, 4000);

function slideImg() {
    cont++

    if (cont > 4) {
        cont = 1
    }

    document.querySelector(`#radio${cont}`).checked = true
}


const email = document.querySelector('#email')
const btnGo = document.querySelector('#btn-go')
const error = document.querySelector('#error')

btnGo.addEventListener('click', () => {
    error.classList.remove('show')
    
    if (!email.value.includes('@')) {
        error.classList.add('show')
        email.value = ''
        email.focus()
    }
})