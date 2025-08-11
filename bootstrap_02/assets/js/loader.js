function loadContent(id, file) {

	fetch(file)
		.then(response => response.text())

		.then(html => {
			document.getElementById(id).innerHTML = html;

			// if (typeof fn === "function") fn();

			
			// const scripts = document.getElementById(id).getElementsByTagName('script');
            //     	for (let script of scripts) {
            //         const newScript = document.createElement('script');
            //         newScript.src = script.src; // Load external scripts
            //         newScript.text = script.innerHTML; // Execute inline scripts
            //         document.body.appendChild(newScript);
            //     }
		})
		.catch(error => console.error('Error: ', error))

}
loadContent('nav', 'partials/navbar.html');
loadContent('hero', 'partials/hero.html');
loadContent('rides', 'partials/rides.html');
loadContent('promo', 'partials/promo.html');

loadContent('contacts', 'partials/contacts.html');
loadContent('footer', 'partials/footer.html');
