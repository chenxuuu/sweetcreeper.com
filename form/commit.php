<?php
$receive = file_get_contents('php://input');
include('conn.php');
$receive =  mysqli_real_escape_string($conn,$receive);
$sql = "INSERT INTO sc_form(data)VALUES('$receive')";

if(mysqli_query($conn,$sql)){
	exit('done');
} else {
	echo 'error:',mysqli_error($conn);
}
?>