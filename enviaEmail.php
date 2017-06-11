<?php
	$destinatario = $_POST["destinatario"];
	$assunto = $_POST["assunto"];
	$msg = $_POST["msg"];

	/*
		$assunto = "teste g";
		$destinatario = "allanemp@gmail.com";
		$msg = "lelele";
	*/
	$conn = odbc_connect("DDCRED","site","5M59TyPG");

	$sql = "dbo.SP_GalluraEnviaEmail '".$assunto."','".$destinatario."','','".$msg."'";

	$result = odbc_exec($conn,$sql);	
	
	if($result){
		$retorno = 1;
	}else{
		$retorno = 0;
	}
	echo json_encode(array("retorno" => $retorno));
	
?>