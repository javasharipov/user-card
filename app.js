const wrapperEl = document.querySelector('.wrapper')
const loadingEl = document.querySelector('.loading')
const BASE_URL = 'https://dummyjson.com'

function fetchData(endpoint) {
	fetch(`${BASE_URL}${endpoint}`)
		.then(response => response.json())
		.then(data => createCard(data))
		.catch(error => console.log(error))
		.finally(() => (loadingEl.style.display = 'none'))
}

window.addEventListener('load', () => {
	createLoading(50)
	fetchData('/users')
})

function createLoading(n) {
	Array(n)
		.fill()
		.forEach(() => {
			const div = document.createElement('div')
			div.className = 'loading__item'
			div.innerHTML = `
	      <div class="loading__banner"></div>
				<div class="loading__text"></div>
				<div class="loading__text short"></div>
		`
			loadingEl.appendChild(div)
		})
}

function createCard(data) {
	data.users.forEach(user => {
		const divEl = document.createElement('div')
		divEl.className = 'card'
		divEl.innerHTML = `<div class="banner"></div>
            <img src="${user.image}" alt="User Image" class="user-img">
            <h3>${user.firstName} ${user.lastName}</h3>
            <span>${user.university}</span>
            <strong>${user.username}</strong>
            <p>${user.email}</p>
            <div class="buttons">
                <button>Subscribe</button>
                <button>Message</button>
            </div>
            <div class="socials">
                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="youtube"><i class="fab fa-youtube"></i></a>
            </div>`

		wrapperEl.appendChild(divEl)
	})
}
