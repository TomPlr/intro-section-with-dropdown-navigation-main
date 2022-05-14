const menu = document.querySelector('.burger-menu')
const navbar = document.querySelector('.navbar')
const section = document.querySelector("section")



menu.addEventListener('click', () => {
    if (navbar.classList.contains('sidebar')) {
        menu.style = `background: url("/images/icon-menu.svg") center/contain no-repeat;`
        navbar.classList.remove('sidebar')
    } else {
        menu.style = `background: url("/images/icon-close-menu.svg") center/contain no-repeat;width: 30px;height= 30px;`
        navbar.classList.add('sidebar')
    }
})


section.addEventListener("click", () => {
    menu.style = `background: url("/images/icon-menu.svg") center/contain no-repeat;`
    navbar.classList.remove('sidebar')
})
