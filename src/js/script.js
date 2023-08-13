const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.mobile-nav-list')
const handleNav = () => {
    burgerBtn.classList.toggle('is-active')
    navMobile.classList.toggle('mobile-active')
}
burgerBtn.addEventListener('click', handleNav)
feather.replace()