<?php
header('Content-type: application/json');
header("access-control-allow-origin: *");
include "db.php";
include $root."/models/producto.php";
include $root."/controllers/helper.php";

$productoMapper = $spot->mapper('Entity\Producto');
$marcaMapper = $spot->mapper('Entity\Marca');
$producto_listaMapper = $spot->mapper('Entity\Producto_Lista');	
if($_GET['type'] == 'productos'){
	$productos = $productoMapper->getByCategoria($_GET['id']);
	$productosArray = array();
	foreach ($productos as $producto) {
		$marca = $marcaMapper->get($producto->marcaid);		
		$pl = $producto_listaMapper->getByProductoAndLista($producto->id, $_GET['lid']);	
		array_push($productosArray, dismount(loadProducto($producto, $marca, $pl)));
	}
	echo json_encode($productosArray);
}
else if($_GET['type'] == 'producto'){
	$producto = $productoMapper->get($_GET['id']);
	$marca = $marcaMapper->get($producto->marcaid);		
	$pl = $producto_listaMapper->getByProductoAndLista($producto->id, $_GET['lid']);
	
	$historialMapper = $spot->mapper('Entity\Historial');
	$historial = $historialMapper->getByProductoAndLista($producto->id, $_GET['lid']);
	$productoModel = loadProducto($producto, $marca, $pl);
	$date = $historial ? $historial->fecha : '';
	if($date){
		$productoModel->ultimaFecha = SpanishDate($date->getTimestamp());
		$productoModel->ultimaCantidad = $historial->cantidad;
	}
	else
		$productoModel->ultimaCantidad = 0;
	echo json_encode(dismount($productoModel));
}
else if($_GET['type'] == 'lista'){
	$pls = $producto_listaMapper->getByLista($_GET['lid']);
	$productosArray = array();
	foreach ($pls->where(['cantidad >'=>0]) as $pl) {
		$producto = $productoMapper->get($pl->productoid);
		$marca = $marcaMapper->get($producto->marcaid);
		array_push($productosArray, dismount(loadProducto($producto, $marca, $pl)));		
	}
	echo json_encode($productosArray);
}
else if($_GET['type'] == 'compra'){
	$productos = $_GET['ids'];
	$success = count($productos);
	foreach($productos as $producto){
		$pl = $producto_listaMapper->getByProductoAndLista($producto, $_GET['lid']);	
		$historialMapper = $spot->mapper('Entity\Historial');
		$historial = $historialMapper->build([
			'listaid' => (int)$_GET['lid'],
			'productoid' => (int)$producto,
			'cantidad' => (int)$pl->cantidad,
			'fecha' => new \DateTime()
		]);
		$result = $historialMapper->insert($historial);
		if($result){
			$producto_listaMapper->delete($pl);
			$success -= 1;
		}
	}
	if($success == 0)
		echo 'true';
	else 
		echo 'false';
}

function loadProducto($producto, $marca, $producto_lista){
	$productoModel = new producto();
	$productoModel->nombre = utf8_encode($producto->nombre);
	$productoModel->id = $producto->id;
	$productoModel->imagen = !is_null($producto->imagen) ? '/uploads/users/' . $producto->imagen : '/uploads/default.jpg';
	//$productoModel->marcaId = $marca->id;
	//$productoModel->marcaImagen = $marca->imagen;
	//$productoModel->marcaNombre = $marca->nombre;
	$productoModel->cantidad = $producto_lista && !is_null($producto_lista->cantidad) ? $producto_lista->cantidad : 0;
	
	return $productoModel;
}
?>