document.addEventListener("DOMContentLoaded", function() {


	var cards = document.getElementsByClassName("card");


	//locking the card
	/*for (var i=0; i<=cards.length; i++) {
		cards[i].addEventListener("click", function(event) {
			var thatCard = this.classList.toggle("chosen");
		});
	}*/


	//getting an array of 16 numbers, in right order thou :(
	/*function range(start,end) {
		var foo = [];
		for (var i = start; i <= end; i++) {
			foo.push(i);
		}
		return foo;
	}

	var numbers = range(1, 16);*/


	//getting an array of 16 numbers in random order
	for (var a =[], i = 1; i<17; i++) a[i]=i;

		function shuffle(array) {
			var tmp, current, top = array.length;
			if (top) while (--top) {
				current = Math.floor(Math.random()*(top+1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
			return array;
		}

	a = shuffle(a);

	console.log(a);

	
	//adding a random number to every card 

	//cards[0].dataset.id = a.slice(0,1);
	
	
	for (var i=0; i<16; i++) {
		cards[i].dataset.id = a.slice(i, i+1);
		console.log(cards[i].dataset.id);
	}

	//paring data-id and image class
	var parring = function() {
		
		for (var i=0; i<16; i++) {
			if (cards[i].dataset.id === "1" || cards[i].dataset.id === "2") {
				this.classList.add("one");
			} else if (cards[i].dataset.id === "3" || cards[i].dataset.id === "4") {
				this.classList.add("two");
			} else if (cards[i].dataset.id === "5" || cards[i].dataset.id === "6") {
				this.classList.add("three");
			} else if (cards[i].dataset.id === "7" || cards[i].dataset.id === "8") {
				this.classList.add("four");
			} else if (cards[i].dataset.id === "9" || cards[i].dataset.id === "10") {
				this.classList.add("five");
			} else if (cards[i].dataset.id === "11" || cards[i].dataset.id === "12") {
				this.classList.add("six");
			} else if (cards[i].dataset.id === "13" || cards[i].dataset.id === "14") {
				this.classList.add("seven");
			} else  {
				this.classList.add("eight");
			}
		};
	}

	parring();



});