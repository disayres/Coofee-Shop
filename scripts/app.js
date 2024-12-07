// Variables
const $ = document;
const themeButtons = document.querySelectorAll(".theme-btn")
const mobileMenuElem = document.querySelector(".mobile-menu")
const closeMenuBtn = document.querySelector(".close-menu")
const openMenuBtn = document.querySelector(".open-menu")
const submenuElem = document.querySelector(".submenu")
const submenuBtn = document.querySelector(".submenu-btn")
const basketElem = document.querySelector(".basket")
const openBasketBtn = document.querySelector(".open-basket")
const closeBasketBtn = document.querySelector(".close-basket")
const overlayElem = document.querySelector(".overlay")
const scrollerArrowElem = document.querySelector("#page-scroller")
const productStars = document.querySelectorAll(".product__star")
const footerScrollerElem = document.querySelector('#footer-scroller')

// Functions
const changeTheme = () => {
    document.documentElement.classList.toggle("dark")
    if (document.documentElement.className.includes("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
}

const setCurrentTheme = () => {
    let mainTheme = localStorage.getItem("theme")
    if (mainTheme === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

const openMenu = () => {
    mobileMenuElem.classList.add('mobile-menu--open')
    overlayElem.classList.add('overlay--visible')
}

const closeMenu = () => {
    mobileMenuElem.classList.remove("mobile-menu--open")
    overlayElem.classList.remove('overlay--visible')
}

const openSubmenu = (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenuElem.classList.toggle('submenu--open')
}

const openBasket = () => {
    basketElem.classList.add('mobile-basket--open')
    overlayElem.classList.add('overlay--visible')
}

const closeBasket = () => {
    basketElem.classList.remove('mobile-basket--open')
    overlayElem.classList.remove('overlay--visible')
}

const resetMobileStructure = () => {
    if (window.innerWidth >= 768) {
        mobileMenuElem.classList.remove('mobile-menu--open')
        basketElem.classList.remove('mobile-basket--open')
        submenuElem.classList.remove('submenu--open')
        overlayElem.classList.remove('overlay--visible')
    }
}

// Listener

themeButtons.forEach(btn => {
    btn.addEventListener('click', changeTheme)
})
openMenuBtn.addEventListener('click', openMenu)
openBasketBtn.addEventListener('click', openBasket)
closeMenuBtn.addEventListener('click', closeMenu)
closeBasketBtn.addEventListener('click', closeBasket)
submenuBtn.addEventListener('click', openSubmenu)
overlayElem.addEventListener('click', () => {
    closeMenu()
    closeBasket()
})
scrollerArrowElem.addEventListener('click', () => {
    window.scroll(0, 950)
})
window.addEventListener("load", setCurrentTheme)
window.addEventListener('resize', resetMobileStructure)
footerScrollerElem.addEventListener('click', () => {
    window.scroll(0, 0)
})