<?php 
	
	$tag = $_POST["tag"];

	if(isset($tag) && $tag!=""){
		if($tag=="enviarcorreo"){
			$nombre = $_REQUEST["nombre"];
			$correo = $_REQUEST["email"];
			$fono = $_REQUEST["telefono"];
			$evento = $_REQUEST["evento"];
			$mensaje = $_REQUEST["mensaje"];

			$destinatario = 'eventossmyc@gmail.com';
			$asunto = "Correo Eventos MCEVENTOS";
			$mensaje = '
                                -----------------------------------------
				Email Contáctenos
				-----------------------------------------

				El Señor(a) : '.$nombre.' 
				Teléfono  : '.$fono.'
				Tipo de Evento:'.$evento.'
				Email 	  : '.$correo.'

				Te envio una consulta desde tu pagina web con el siguiente mensaje:'."\n".$mensaje."\n\n".' Qenkotronics';

				mail($destinatario,$asunto,$mensaje);
			print true;
		}else{
			print false;
		}
	}


 ?>