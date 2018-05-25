<?php

class recipe{			
	private $id;
	private $nombre;
	private $imagen;
	private $pricelevel;
	private $tiempo;
	private $favorites;
	
	public function __get($nombre) {
		return $this->$nombre;
	}
	public function __set($nombre, $value){
		return $this->$nombre = $value;
	}
}
?>