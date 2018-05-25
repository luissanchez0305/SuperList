<?php
include "db.php";
include $root."/controllers/helper.php";
include $root."/models/recipe.php";
	
$recipeMapper = $spot->mapper('Entity\Recipe');
$recipes = $recipeMapper->all();
$recipesArray = array();
foreach($recipes as $recipe){
	array_push($recipesArray, dismount($recipe));
}
echo json_encode($recipesArray);
?>