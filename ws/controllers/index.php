<?php
include "db.php";
include $root."/controllers/helper.php";
include $root."/models/recipe.php";
	
$recipeMapper = $spot->mapper('Entity\Recipe');
$recipes = $recipeMapper->all();
foreach($recipes as $recipe){
	echo $recipe->id . '<br/>';
}
?>