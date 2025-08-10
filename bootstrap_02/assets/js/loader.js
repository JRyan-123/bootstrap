function loadContent(id, file, fn) {

	fetch(file)
		.then(response => response.text())

		.then(html => {
			document.getElementById(id).innerHTML = html;

			if (typeof fn === "function") fn();
		})
		.catch(error => console.error('Error: ', error))

}
loadContent('nav', 'partials/navbar.html');
loadContent('hero', 'partials/hero.html');
loadContent('rides', 'partials/rides.html');
loadContent('promo', 'partials/promo.html');