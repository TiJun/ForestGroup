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
	if (nameInput.value === '' && emailInput.value === '' && textInput.value === '' && checkbox.checked === false) {
		nameError.textContent = 'Pole musi być wypełnione!'
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		emailInput.classList.add('error')
		textInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value !== '' && emailInput.value === '' && textInput.value === '' && checkbox.checked === false) {
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		textInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value === '' && emailInput.value !== '' && textInput.value === '' && checkbox.checked === false) {
		nameError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		textInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value === '' && emailInput.value === '' && textInput.value !== '' && checkbox.checked === false) {
		emailError.textContent = 'Pole musi być wypełnione!'
		nameError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		nameInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value !== '' && emailInput.value !== '' && textInput.value === '' && checkbox.checked === false) {
		textError.textContent = 'Pole musi być wypełnione!'
		textInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value === '' && emailInput.value !== '' && textInput.value !== '' && checkbox.checked === false) {
		nameError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	} else if (nameInput.value !== '' && emailInput.value === '' && textInput.value !== '' && checkbox.checked === false) {
		emailError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
        checkboxError.textContent = 'Wymagana zgoda!'
	}else if (nameInput.value === '' && emailInput.value === '' && textInput.value === '' && checkbox.checked === true) {
		nameError.textContent = 'Pole musi być wypełnione!'
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		emailInput.classList.add('error')
		textInput.classList.add('error')
	} else if (nameInput.value !== '' && emailInput.value === '' && textInput.value === '' && checkbox.checked === true) {
		emailError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		textInput.classList.add('error')
	} else if (nameInput.value === '' && emailInput.value !== '' && textInput.value === '' && checkbox.checked === true) {
		nameError.textContent = 'Pole musi być wypełnione!'
		textError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
		textInput.classList.add('error')
	} else if (nameInput.value === '' && emailInput.value === '' && textInput.value !== '' && checkbox.checked === true) {
		emailError.textContent = 'Pole musi być wypełnione!'
		nameError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
		nameInput.classList.add('error')
	} else if (nameInput.value !== '' && emailInput.value !== '' && textInput.value === '' && checkbox.checked === true) {
		textError.textContent = 'Pole musi być wypełnione!'
		textInput.classList.add('error')
	} else if (nameInput.value === '' && emailInput.value !== '' && textInput.value !== '' && checkbox.checked === true) {
		nameError.textContent = 'Pole musi być wypełnione!'
		nameInput.classList.add('error')
	} else if (nameInput.value !== '' && emailInput.value === '' && textInput.value !== '' && checkbox.checked === true) {
		emailError.textContent = 'Pole musi być wypełnione!'
		emailInput.classList.add('error')
	}
}
sendBtn.addEventListener('click', handleForm)
burgerBtn.addEventListener('click', handleNav)
feather.replace()
