const search = document.getElementById('search');
const searchBtn = document.getElementById('form-search-btn');
const cart = document.getElementById('cart');
const cartBlock = document.querySelector('.cart-block');
const items = document.querySelectorAll('.cart-item');
const totalItemsElem = document.getElementById('cart-count');
const totalPriceElem = document.getElementById('total-price');
const modal = document.getElementById('question-modal');
const agreedContainer = document.querySelector('.form-modal__checkbox');
const agreed = document.getElementById('agreed');
const customCheckbox = document.querySelector('.custom-checkbox');
const modalBtn = document.querySelector('.contacts__btn')
const closeModal = document.querySelector('.modal__close')
const modalForm = document.querySelector('.form-modal');
const modalSubmit = document.querySelector('.form-modal__btn');
let totalItems = 0
let totalPrice = 0

search.addEventListener('focus', () => {
	searchBtn.classList.add("search-focus")
})
search.addEventListener('focusout', () => {
	searchBtn.classList.remove("search-focus")
})
cart.addEventListener('click', (e) => {
	e.preventDefault();
	cartBlock.classList.toggle("active")
})

items.forEach(item => {
	let count= 0;
	const countElem = item.querySelector('.cart-item__count');
	const priceElem = item.querySelector('.cart-item__price-num');
	let price = +priceElem.innerHTML.split(" ").join("");
	const minus = item.querySelector('.cart-item__minus');
	const plus = item.querySelector('.cart-item__plus');
	minus.addEventListener('click', (e) => {
			if (count > 0) {
				count = count - 1;
				countElem.innerHTML = count
				totalItems -= 1
				totalItemsElem.innerHTML = totalItems
				totalPrice -= price
				totalPriceElem.innerHTML = totalPrice.toString().split( /(?=(?:...)*$)/ ).join(" ")
			}
		})

	plus.addEventListener('click', (e) => {
				count = count + 1;
				countElem.innerHTML = count
				totalItems += 1;
				totalItemsElem.innerHTML = totalItems
		totalPrice += price
		totalPriceElem.innerHTML = totalPrice.toString().split( /(?=(?:...)*$)/ ).join(" ")
		})

})

agreedContainer.addEventListener('click', () => {
	if (!agreed.checked) {
		agreed.checked = true
		customCheckbox.classList.add('checked')
	} else {
		agreed.checked = false
		customCheckbox.classList.remove('checked')
	}
})

modalBtn.addEventListener('click', (e) => {
	modal.classList.toggle('opened');
})
closeModal.addEventListener('click', (e) => {
	modal.classList.remove('opened');
})


function addErrorClass (text) {
	modalSubmit.classList.add('error')
	modalSubmit.innerHTML = text
	modalSubmit.disabled = true
		setTimeout(() => {
			modalSubmit.classList.remove('error')
			modalSubmit.innerHTML = 'Заказать звонок'
			modalSubmit.disabled = false
		}, 2000)
}


function validatePhone (phone) {
	let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	return regex.test(phone)
}

modalForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const name = modalForm.name.value
	const phone = modalForm.phone.value
	const agreed = modalForm.agreed.checked
	if (!validatePhone(phone)) {
		addErrorClass("Проверьте телефон")
	}
	else if (!agreed) {
		addErrorClass("Нужно подтверждение")
	} else {
		modalForm.submit();
	}
})


const mobMenu = document.getElementById('mob-menu');
const mobBlock = document.querySelector('.mobile-menu__block')


mobMenu.addEventListener('click', (e) => {
	e.preventDefault();
	mobBlock.classList.toggle('active');
	mobMenu.classList.toggle('active')
})