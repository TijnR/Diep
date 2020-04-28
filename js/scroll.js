// Tijn Roozen


document.addEventListener("scroll",function(event){

	//Een waarde geven aan de scroll positie op de site
	var top = window.scrollY + document.querySelector('.meter').getBoundingClientRect().top;
	//deze waarden moet overeen komen met de echte diepte van de artikelen, Door deze som.
  console.log(top);
	top = (((top - 70) / 30))
	//afronden.
	top = parseInt(top);
	//Het in de HTML zetten
	document.getElementById("diepte").innerHTML = top;



});
