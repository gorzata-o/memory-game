document.addEventListener("DOMContentLoaded", function() {


	var cards = document.getElementsByClassName("card");

	for (var i=0; i<=cards.length; i++) {
		cards[i].addEventListener("click", function(event) {
			var thatCard = this.classList.toggle("chosen");
		});
	}








});