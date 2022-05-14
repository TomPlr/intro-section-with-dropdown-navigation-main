const firstDropdown = document.querySelector('.st')
const secondDropdown = document.querySelector('.nd')
const dropdownCompany = document.querySelector('.dropdown--company')
const dropdownFeatures = document.querySelector('.dropdown--features')

const firstArrow = document.getElementById("firstArrow")
const secondArrow = document.getElementById("secondArrow")

const elems = () => {
    const el = document.querySelectorAll(".show");
    [].forEach.call(el, function (el) {
        el.classList.remove("show");
    })
    const el2 = document.querySelectorAll('#firstArrow, #secondArrow');
    [].forEach.call(el2, function (el) {
        el.setAttribute("d", "m1 1 4 4 4-4");
    })
}

firstDropdown.addEventListener('click', () => {
    elems()
    dropdownFeatures.classList.add("show")
    firstArrow.setAttribute("d", "m1 5 4-4 4 4");
})

secondDropdown.addEventListener('click', () => {
    elems()
    dropdownCompany.classList.add("show")
    secondArrow.setAttribute("d", "m1 5 4-4 4 4");
})

window.addEventListener('click', (e) => {
    if (!e.target.matches('.close')) {
        elems()
    }
})




