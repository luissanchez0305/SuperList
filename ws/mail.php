<?php
$root = str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']).'/api/superlist';

header('Content-type: application/json');
header("access-control-allow-origin: *");
header('Access-Control-Allow-Headers: Authorization');
header('Access-Control-Allow-Credentials: true');

include('mail/php-mailjet-v3-simple.class.php');
include $root."/controllers/helper.php";

$post = retrieveJsonPostData($_POST);
if(isset($post->e)) {
    
    $to      = $post->e;
    $pwd     = RandomString();
    $username = 'espheras_dbuser';
    $password = 'Goingupinlife123';
    $database = 'espheras_superlist';
    
    $link = mysql_connect('162.210.98.37',$username,$password) or die('Cannot connect to the DB');
    mysql_select_db($database) or die(mysql_errno());
    $pwdEncrypted = md5($pwd);
	$query = "UPDATE usuarios SET password = '$pwdEncrypted' WHERE email = '$to'";
	mysql_query($query,$link) or die('Errant query:  '.$query);

    $params = array(
        "method" => "POST",
        "from" => "hablemos@esferasoluciones.com",
        "to" => $to,
        "subject" => 'TrikyGol - Tu nuevo password',
        "text" => "Este es su nuevo password:"."\r\n".$pwd."\r\n"."Asegurate de cambiarlo al loguearte"
    );
    $mj = new Mailjet( 'be82026b9fe11c82acb01de4c7889764', 'aac2f621c45039bb1eb8a1e3dbe3f08f' );
    
    $result = $mj->sendEmail($params);
    $response = array();
	
    if ($mj->_response_code == 200) {
        echo json_encode(array("status" => "ok"));
    } else {
        echo json_encode(array("status" => "fail", "msg" =>  $mj->_response_code));
    }
}

function RandomString()
{
    $characters = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < 7; $i++) {
        $randstring .= $characters[rand(0, strlen($characters))];
    }
    return $randstring;
}
?> 