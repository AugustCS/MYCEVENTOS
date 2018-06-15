$(document).ready(function(){
	
	$(".formevento").submit(function(event) {
		event.preventDefault();
		var data = $(this).serializeArray();
	    data.push({name:'tag',value:'enviarcorreo'});

	    $.ajax({
	      url: 'enviarcorreo.php',
	      type: 'POST',
	      dataType: 'json',
	      data: data,
	    })
	    .done(function() {
	      alert("Gracias por su mensaje. Nos pondremos en contacto con usted a la brevedad posible.");
	    })
	    .fail(function() {
	      alert("Envio Fallido");
	    })
	    $(".formevento input[type='text']").val("");
	    $(".formevento textarea").val("");
	});
	
})