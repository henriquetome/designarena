<?php

	$to                = 'equipe@e-soluttions.com.br';
	$subjetc           = 'Contato Arena';

	$nome              = $_POST['name'];
	$email             = trim($_POST['mail']);
	$telefone          = $_POST['phone'];
	$mensagem          = $_POST['comment'];

	$mensagemHTML = '<h1>FORMULÁRIO DE CONTATO</h1>
	<p><b>Nome:</b> '.$nome.'
	<p><b>E-mail:</b> '.$email.'
	<p><b>Telefone:</b> '.$telefone.'
	<p><b>Assunto:</b> '.$subjetc.'
	<p><b>Mensagem:</b> '.$mensagem.'</p>
	<hr>';

	$headers = "MIME-Version: 1.1\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: $nome\r\n";
	$headers .= "Return-Path: $to \r\n";
	$envio = mail($to, $subjetc, $mensagemHTML, $headers); 
	 
	if($envio) { ?>

		<script>

		    alert('Sua mensagem foi enviada corretamente.');
		    window.location = 'index.php';

		</script>

<?php
	}
?>