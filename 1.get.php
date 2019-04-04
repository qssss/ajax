<?php
header('Content-Type: text/html;charset=utf-8');
error_reporting();
$arr = array('username' => 'huanghuang','age' => 18 );
echo json_decode($arr);
?>