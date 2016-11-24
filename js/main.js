$(document).ready(function() {
	//arreglo de fotos y nombre
	var mexico = [{
		nombre: "adri",
		foto: "img/fotos/adri.jpg"	
	},{
		nombre: "adrix",
		foto: "img/fotos/adrix.jpg"	
	},{
		nombre: "ale bebé",
		foto: "img/fotos/ale.jpg"
	},{
		nombre: "ale",
		foto: "img/fotos/aleD.jpg"
	},{		
		nombre: "ana paola",
		foto: "img/fotos/anaPao.jpg"
	},{	
		nombre: "bere",
		foto: "img/fotos/bere.jpg"
	},{
		nombre: "carmen",
		foto: "img/fotos/carmen.jpg"
	},{
		nombre: "claudia",
		foto: "img/fotos/claudia.jpg"
	},{
		nombre: "cristina",
		foto: "img/fotos/cristina.jpg"
	},{	
		nombre: "edith",
		foto: "img/fotos/edith.jpg"
	},{	
		nombre: "flor",
		foto: "img/fotos/flor.jpg"
	},{		
		nombre: "hass",
		foto: "img/fotos/hass.jpg"
	},{
		nombre: "iana",
		foto: "img/fotos/iana.jpg"
	},{		
		nombre: "irene",
		foto: "img/fotos/irene.jpg"
	},{
		nombre: "isabel",
		foto: "img/fotos/isabel.jpg"
	},{
		nombre: "isolda",
		foto: "img/fotos/isolda.jpg"
	},{		
		nombre: "jackie",
		foto: "img/fotos/jackie.jpg"
	},{
		nombre: "karem",
		foto: "img/fotos/karem.jpg"
	},{
		nombre: "karen",
		foto: "img/fotos/karen.jpg"
	},{
		nombre: "lili",
		foto: "img/fotos/lili.jpg"
	},{
		nombre: "linda",
		foto: "img/fotos/linda.jpg"
	},{		
		nombre: "liz",
		foto: "img/fotos/liz.jpg"
	},{	
		nombre: "mariana",
		foto: "img/fotos/marianaD.jpg"
	},{		
		nombre: "mariana",
		foto: "img/fotos/marianaP.jpg"
	},{
		nombre: "monica",
		foto: "img/fotos/moni.jpg"
	},{		
		nombre: "monse",
		foto: "img/fotos/monse.jpg"
	},{
		nombre: "natasha",
		foto: "img/fotos/natasha.jpg"
	},{
		nombre: "nayeli",
		foto: "img/fotos/nayeli.jpg"
	},{
		nombre: "okaidy",
		foto: "img/fotos/okaidy.jpg"
	},{		
		nombre: "oliva",
		foto: "img/fotos/oliva.jpg"
	},{	
		nombre: "orianna",
		foto: "img/fotos/orianna.jpg"
	},{
		nombre: "paola",
		foto: "img/fotos/paola.jpg"
	},{		
		nombre: "sandra",
		foto: "img/fotos/sandra.jpg"
	},{	
		nombre: "shantal",
		foto: "img/fotos/shantal.jpg"
	},{		
		nombre: "tania",
		foto: "img/fotos/tania.jpg"
	},{
		nombre: "valeria",
		foto: "img/fotos/valeria.jpg"
	},{		
		nombre: "vannia",
		foto: "img/fotos/vannia.jpg"
	},{
		nombre: "varinia",
		foto: "img/fotos/varinia.jpg"
	},{
		nombre: "veronica",
		foto: "img/fotos/veronica.jpg"
	},{		
		nombre: "yaredi",
		foto: "img/fotos/yaredi.jpg"
	},{
		nombre: "yasury",
		foto: "img/fotos/yasury.jpg"
	},{			
		nombre: "yess",
		foto: "img/fotos/yess.jpg"
	}];

	var contAcierto = 0;
	var contError = 0;
	var puntuaje = 0 ;



	//funcion random para que cambie la imagen
	function getFoto(max,min) {
		return Math.floor(Math.random() * (max-min) ) + min;
	}
	var fotoAlumna = getFoto(0,42);
	// $("#foto").attr("src", (mexico[fotoAlumna]["foto"]));


		//Opcion de select
	$('select').on('change', function() {
		console.log('Cambio valor de select');
		//verifica la opcion del select
		if ( $('select').val() === 'arequipa' || $('select').val() === 'chile' || $('select').val() === 'lima' ) {
			alert('Todavía no estan cargadas las fotos');
			$("#foto").attr("src","");
		} else if ($('select').val() === 'mexico') {
			console.log('empieza juego');
			fotoAlumna = getFoto(0,42);
			//cambia el attributo de la foto del src(direccion de foto)
			$("#foto").attr("src", (mexico[fotoAlumna]["foto"]));
		}
	});
	var span = $('<span></span>');
	var puntos = $("#puntos");

	

	$('#enviar').on('click', function() {
		console.log('Click en boton comprobar');
		var nombre = $('#nombre').val();
		console.log(nombre);
		if (nombre == mexico[fotoAlumna]["nombre"]) {
			console.log("correcto");
			$(span).text("Correcto").removeClass("rojo").addClass("verde");
			$("#error").append(span);
		
			fotoAlumna = getFoto(0,42);
			console.log("cambia foto " + fotoAlumna);
			$("#foto").attr("src", (mexico[fotoAlumna]["foto"]));
			$('#nombre').val("");
			//contador de puntuaje acertado
			puntuaje = puntuaje + 5;
			$("#puntos").html(" " + puntuaje);

		} else {
			contError++;
			console.log("incorrecto");
			$('#nombre').val("");
			$(span).text("Sigue intentandolo").removeClass("verde").addClass("rojo");
			$("#error").append(span);
			
			if(contError == 5){

				fotoAlumna = getFoto(0,42);
				console.log("foto " + fotoAlumna);
				$("#foto").attr("src", (mexico[fotoAlumna]["foto"]));

				contError = 0;
				//elimina un punto al no escribir correcto el nombre
				puntuaje = puntuaje-1;
				$("#puntos").html(" " + puntuaje);
				console.log("cambia contError " + contError);
			}
		}	
	});
});


