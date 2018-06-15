$(document).ready(function(){

	//codigo primer slider
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    loop:true,
    })

	//codigo para quitar evento link a etiqueta a
	$("a").click(function(e){
		e.preventDefault();
	})

	var cvideo = document.getElementById("idvideo");
	//controles video
	
	$("#playvideo").click(function(){
		cvideo.play();
		$(this).addClass("active");
		$("#pausevideo").removeClass("active");
	})

	$("#pausevideo").click(function(){
		cvideo.pause();
		$("#playvideo").removeClass("active");
		$(this).addClass("active");
	})

	// Codigo Carrusel Flexslider
	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    asNavFor: '#slider'
	  });
	 
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	  });


	  //codigo carrousel quino
	  $('#sliquino').owlCarousel({
      autoplay:true,
      items:1,
      autoplayTimeout:3000,
      margin:5,
      responsive:{
          0:{
              items:1
          },
          520:{
              items:1
          },
          600:{
              items:1
          },
          750:{
          	  items:1
          },
          900:{
              items:2
          },
          1072:{
              items:3
          },
          1300:{
              items:3
          }
      }
    });

	  //codigo para moverme en la pagina
	var body = $('html,body');
	$("#idmatri").click(function(){
			body.animate({
				scrollTop:2424
			},500,'swing');
		})
	$("#idquino").click(function(){
			body.animate({
				scrollTop:3257
			},500,'swing');
	})
	$("#idcontacto").click(function(){
			body.animate({
				scrollTop:3800
			},500,'swing');
	})
	$("#idnosotros").click(function(){
			body.animate({
				scrollTop:1190
			},500,'swing');
	})

	$(".upflecha").click(function(){
			body.animate({
				scrollTop:0
			},500,'swing');
		})

	$("#bomenu").click(function() {
		$(".menuresponsive").toggle("swing");
	});

	$(".subclear").click(function(){
		$(".formevento input[type='text']").val("");
	    $(".formevento textarea").val("");
	});
	
	$(window).scroll(function() {
		var ancho = $(window).width();
		var scroll = $(window).scrollTop();
		//console.log(scroll);
		//
		//codigo menu fixeado
		if(scroll>102){
			$(".cabecera").addClass('fixeado');
		}else{
			$(".cabecera").removeClass("fixeado");
		}

		if(scroll>200){
			$(".upflecha").fadeIn("fast");
		}else{
			$(".upflecha").fadeOut("fast");
		}
	});
})

