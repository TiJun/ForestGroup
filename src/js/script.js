const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.mobile-nav-list')
const listItems = document.querySelectorAll('.nav-mobile-list-item')
const handleNav = () => {
    burgerBtn.classList.toggle('is-active')
    navMobile.classList.toggle('mobile-active')
}
listItems.forEach(el => el.addEventListener('click', () => {
    burgerBtn.classList.remove('is-active')
    navMobile.classList.remove('mobile-active')
}))
burgerBtn.addEventListener('click', handleNav)
feather.replace()