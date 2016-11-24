$(document).ready(function() {
	//arreglo de fotos y nombre
	var mexico = [];

	var alumna1 = [];
	alumna1["nombre"] = "Karen";
	alumna1["foto"] = "img/fotos/Karen.jpg";
	mexico.push(alumna1);

	var alumna2 = [];
	alumna2["nombre"] = "Edith";
	alumna2["foto"] = "img/fotos/Edith.jpg";
	mexico.push(alumna2);

	var alumna3 = [];
	alumna3["nombre"] = "Val";
	alumna3["foto"] = "img/fotos/Val.jpg";
	mexico.push(alumna3);

	var alumna4 = [];
	alumna4["nombre"] = "Nat";
	alumna4["foto"] = "img/fotos/Nat.jpg";
	mexico.push(alumna4);

	var alumna5 = [];
	alumna5["nombre"] = "Vero";
	alumna5["foto"] = "img/fotos/Vero.jpg";
	mexico.push(alumna5);

	console.log(mexico[2]["nombre"]);

	//Opcion de select
	$('select').on('change', function() {
		console.log('Cambio valor de select');
		//verifica la opcion del select
		if ( $('select').val() === 'arequipa' || $('select').val() === 'chile' || $('select').val() === 'lima' ) {
			alert('Todavía no estan cargadas las fotos');
			$("#foto").attr("src","");
		} else if ($('select').val() === 'mexico') {
			var fotoAlumna = getFoto(0,5);
			//cambia el attributo de la foto del src(direccion de foto)
			$("#foto").attr("src", (mexico[fotoAlumna]["foto"]));
		}
	});

	function getFoto(max,min) {
		return Math.floor(Math.random() * (max-min) ) + min;
	}
});