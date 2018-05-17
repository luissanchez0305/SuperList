<?php
namespace Entity;
class Recipe extends \Spot\Entity
{
    protected static $mapper = 'Entity\Mapper\Recipe';

    protected static $table = 'recetas';
    public static function fields()
    {
        return [
            'id'		    => ['type' => 'integer', 'primary' => true, 'autoincrement' => true],
            'nombre'  	    => ['type' => 'string', 'required' => true],
            'imagen'        => ['type' => 'string', 'required' => true],
            'pricelevel'  	=> ['type' => 'string', 'required' => true],
            'tiempo'		=> ['type' => 'integer', 'required' => true]
        ];
    }
}
?>