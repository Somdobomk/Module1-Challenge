window.onscroll = function () {
	myFunction();
};

// Hold the navbar
var navbar = document.getElementById('navbar');

var sticky = navbar.offsetTop;

// Remove sticky navbar when back at the top of the page
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
