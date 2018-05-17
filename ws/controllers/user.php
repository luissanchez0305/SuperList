<?php

include "db.php";
include $root."/controllers/helper.php";

$post = retrieveJsonPostData($_POST);

if(isset($post->type) && (isset($post->e) || isset($post->p))) {
	$type = $post->type;
	$email = $post->e;
	$usuarioMapper = $spot->mapper('Entity\Usuario');
	if($type == 'cred'){
		$password = $post->p;
		$usuario = $usuarioMapper->getByEmail($email);
		$result = '0';
		
		if($usuario && $usuario->password == md5($password)){
			$result = $usuario->id;
		}
		echo json_encode(array('id' => $result, 'status' => $result > 0 ? 'ok': 'fail'));
	}
	else if($type == 'exists'){
		$usuario = $usuarioMapper->getByEmail($email);
		$result = '0';
		$name = '';
		$lastname = '';
		$email = '';
		if($usuario && is_numeric($usuario->id)){
			$result = $usuario->id;
			$name = $usuario->nombre;
			$lastname = $usuario->apellido;
			$email = $usuario->email;
		}
		echo json_encode(array('id' => $result, 'name' => $name, 'lastname' => $lastname, 'email' => $email, 'status' => 'ok'));
	}
	else if($type == 'manage'){
		$password = $post->p;
		$nombre = $post->n;
		$apellido = $post->a;
		$id = $post->id;
		if($id > 0) {
			$usuario = $usuarioMapper->get($id);
			$usuario->email = $email;
			$usuario->password = strlen($password) > 0 ? $password : $usuario->password;
			$usuario->nombre = $nombre;
			$usuario->apellido = $apellido;
			$result = $usuarioMapper->update($usuario);
			
			if($result){
				echo json_encode(array('result' => 'true'));
			}
			else {
				echo json_encode(array('result' =>'false'));		
			}
		}
		else {		
			$usuario = $usuarioMapper->build([	
				'email'  	=> $email,
	        	'password' 	=> md5($password),
	        	'nombre'  	=> $nombre,
	        	'apellido'  => $apellido,
	        	'admin' 	=> false
			]);	
			$result = $usuarioMapper->insert($usuario);
			
			if($result){				
				$listaMapper = $spot->mapper('Entity\Lista');							
				$usuario_listaMapper = $spot->mapper('Entity\Usuario_Lista');
				createListAddToUser($listaMapper, $usuario_listaMapper, $usuario->id, $nombre);				
				echo json_encode(array('result' => true, 'id' => $usuario->id, 'status' => 'ok'));
			}
			else {		
				echo json_encode(array('result' => false, 'id' => 0, 'status' => 'ok'));	
			}
		}
	}
}
?> 