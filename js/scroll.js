// Tijn Roozen


document.addEventListener("scroll",function(event){


	//Een waarde geven aan de scroll positie op de site
	var top = window.scrollY + document.querySelector('.meter').getBoundingClientRect().top;
	//deze waarden moet overeen komen met de echte diepte van de artikelen, Door deze som.

	top = (((top - 70) / 30))
	//afronden.

	top = parseInt(top);
	console.log(top);
	//Het in de HTML zetten
	document.getElementById("diepte").innerHTML = top;


	var upButton = document.querySelector('.up');
	var downButton = document.querySelector('.down');

	upButton.addEventListener("click", function(event){
		console.log("up");
		console.log(top);

		window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
		});
	});

	downButton.addEventListener("click", function(event){
		console.log("down");
		// window.scrollTo(0, 2000);


		if (top < 18) {
			window.scrollTo({
			top: 600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=18 && top <28){
			window.scrollTo({
			top: 900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=28 && top <55){
			window.scrollTo({
			top: 1700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=55 && top <95){
			window.scrollTo({
			top: 2900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=95 && top <145){
			window.scrollTo({
			top: 4400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=145 && top <205){
			window.scrollTo({
			top: 6200,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=205 && top <252){
			window.scrollTo({
			top: 7600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=252 && top <335){
			window.scrollTo({
			top: 10100,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=335 && top <598){
			window.scrollTo({
			top: 18000,
			left: 0,
			behavior: 'smooth'
			});
		}	else if (top >=598 && top <845){
			window.scrollTo({
			top: 25400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=845 && top <892){
			window.scrollTo({
			top: 26800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >=892 && top < 1015){
			window.scrollTo({
			top: 30500,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1015 && top < 1055){
			window.scrollTo({
			top: 31700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1055 && top < 1492){
			window.scrollTo({
			top: 44800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1492 && top < 1795){
			window.scrollTo({
			top: 53900,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 1795 && top < 2158){
			window.scrollTo({
			top: 64800,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 2158 && top < 3822){
			window.scrollTo({
			top: 114700,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 3822 && top < 3998){
			window.scrollTo({
			top: 120000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 3998 && top < 4342){
			window.scrollTo({
			top: 130300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4342 && top < 4545){
			window.scrollTo({
			top: 136400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 4545 && top < 5998){
			window.scrollTo({
			top: 180000,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 5998 && top < 6742){
			window.scrollTo({
			top: 202300,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 6742 && top < 8212){
			window.scrollTo({
			top: 246400,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8212 && top < 8852){
			window.scrollTo({
			top: 265600,
			left: 0,
			behavior: 'smooth'
			});
		} else if (top >= 8212){
			window.scrollTo({
			top: 400000,
			left: 0,
			behavior: 'smooth'
			});
		}


	});

});
