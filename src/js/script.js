const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.mobile-nav-list')
const listItems = document.querySelectorAll('.nav-mobile-list-item')
const nameError = document.querySelector('#name-error')
const emailError = document.querySelector('#email-error')
const textError = document.querySelector('#text-error')
const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const textInput = document.querySelector('#text-input')
const sendBtn = document.querySelector('.contact__button')
const checkbox = document.querySelector('.contact__checkbox')
const checkboxError = document.querySelector('#checkbox-error')
const allInputs = document.querySelectorAll('.contact__input')
const date = document.querySelector('.footer__year')
const desktopNavList = document.querySelectorAll('.nav-desktop-list-item')
const handleNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('mobile-active')
}
listItems.forEach(el =>
	el.addEventListener('click', () => {
		burgerBtn.classList.remove('is-active')
		navMobile.classList.remove('mobile-active')
	})
)
const handleForm = () => {
	if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === false
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		emailInput.classList.add('error')
		textInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === false
	) {
		nameInput.classList.remove('error')
		textInput.classList.remove('error')
		emailInput.classList.remove('error')
		nameError.textContent = ''
		textError.textContent = ''
		emailError.textContent = ''
		checkboxError.textContent = 'Wymagana zgoda!'
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === false
	) {
		nameInput.classList.remove('error')
		nameError.textContent = ''
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		textInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === false
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		textInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
		emailError.textContent = ''
		emailInput.classList.remove('error')
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === false
	) {
		emailError.textContent = 'Pole musi być wypełnione!'
		nameError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		nameInput.classList.add('error')
		textInput.classList.remove('error')
		textError.textContent = ''
		checkboxError.textContent = 'Wymagana zgoda!'
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === false
	) {
		textError.textContent = 'Pole musi być wypełnione!'
		textInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
		nameInput.classList.remove('error')
		emailInput.classList.remove('error')
		nameError.textContent = ''
		emailError.textContent = ''
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === false
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
		emailInput.classList.remove('error')
		textInput.classList.remove('error')
		emailError.textContent = ''
		textError.textContent = ''
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === false
	) {
		emailError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		checkboxError.textContent = 'Wymagana zgoda!'
		nameInput.classList.remove('error')
		textInput.classList.remove('error')
		nameError.textContent = ''
		textError.textContent = ''
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === true
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		emailInput.classList.add('error')
		textInput.classList.add('error')
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === true
	) {
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		textInput.classList.add('error')
		nameInput.classList.remove('error')
		nameError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === true
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		textInput.classList.add('error')
		emailInput.classList.remove('error')
		emailError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === true
	) {
		emailError.textContent = 'Pole musi być wypełnione!'
		nameError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		nameInput.classList.add('error')
		textInput.classList.remove('error')
		textError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() === '' &&
		checkbox.checked === true
	) {
		emailError.textContent = ''
		textError.textContent = 'Pole musi być wypełnione!'
		textInput.classList.add('error')
		nameInput.classList.remove('error')
		emailInput.classList.remove('error')
		nameError.textContent = ''
		emailError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() === '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === true
	) {
		nameError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		emailInput.classList.remove('error')
		textInput.classList.remove('error')
		emailError.textContent = ''
		textError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() === '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === true
	) {
		emailError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		nameInput.classList.remove('error')
		textInput.classList.remove('error')
		nameError.textContent = ''
		textError.textContent = ''
		checkboxError.textContent = ''
	} else if (
		nameInput.value.trim() !== '' &&
		emailInput.value.trim() !== '' &&
		textInput.value.trim() !== '' &&
		checkbox.checked === true
	) {
		nameError.textContent = ''
		emailError.textContent = ''
		textError.textContent = ''
		nameInput.classList.remove('error')
		emailInput.classList.remove('error')
		textInput.classList.remove('error')
		checkboxError.textContent = ''
		alert('Wiadomość wysłana!')
		emailInput.value = ''
		textInput.value = ''
		nameInput.value = ''
		checkbox.checked = false
	}
}
const emailCheck = () => {
	const emailRegex = new RegExp('[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9-]+)+[.]+[a-z]{2,3}$')
	const nameRegex = new RegExp('[.]')
	if (emailRegex.test(emailInput.value) === false && nameRegex.test(nameInput.value) === true) {
		emailError.textContent = 'Niepoprawny adres email'
		nameError.textContent = 'Imię zawiera niepoprawne znaki!'
		emailInput.classList.add('error')
		nameInput.classList.add('error')
	} else if (emailRegex.test(emailInput.value) === true && nameRegex.test(nameInput.value) === true) {
		emailInput.classList.remove('error')
		nameInput.classList.add('error')
		nameError.textContent = 'Imię zawiera niepoprawne znaki!'
		emailError.textContent = ''
	} else {
		emailError.textContent = ''
		emailInput.classList.remove('error')
		handleForm()
	}
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	date.innerText = year
}
handleCurrentYear()
const scrollSpy = () => {
	if (window.location.pathname.endsWith('/index.html') === true && window.scrollY >= 0 && window.scrollY <= 484) {
		desktopNavList.item(0).firstChild.classList.add('scroll-spy')
		desktopNavList.item(1).firstChild.classList.remove('scroll-spy')
	} else if (
		window.location.pathname.endsWith('/index.html') === true &&
		window.scrollY >= 485 &&
		window.scrollY <= 1105
	) {
		desktopNavList.item(0).firstChild.classList.remove('scroll-spy')
		desktopNavList.item(1).firstChild.classList.add('scroll-spy')
		desktopNavList.item(2).firstChild.classList.remove('scroll-spy')
	} else if (window.location.pathname.endsWith('/index.html') === true && window.scrollY >= 1106) {
		desktopNavList.item(1).firstChild.classList.remove('scroll-spy')
		desktopNavList.item(2).firstChild.classList.add('scroll-spy')
	} else if (window.location.pathname.endsWith('offers.html') === true) {
		desktopNavList.item(2).firstChild.classList.add('scroll-spy')
	} else if (window.location.pathname.endsWith('contact.html') === true) {
		desktopNavList.item(3).firstChild.classList.add('scroll-spy')
	}
}
if (window.location.pathname.endsWith('contact.html') === true) {
	sendBtn.addEventListener('click', emailCheck)
}
allInputs.forEach(el =>
	el.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			emailCheck()
		}
	})
)
burgerBtn.addEventListener('click', handleNav)
feather.replace()
window.addEventListener('scroll', scrollSpy)
document.addEventListener('DOMContentLoaded', scrollSpy)