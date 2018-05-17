<?php

class lista{			
	private $id;
	private $nombre;
	private $activo;
	
	public function __get($name) {
		return $this->$nombre;
	}
	public function __set($name, $value){
		return $this->$nombre = $value;
	}
}
?>