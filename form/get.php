<?php
include('conn.php');
switch ($_GET['m']) {
	case 'unread':
		$q = mysqli_query($conn,"select * from `sc_form` where `read`=0");
		while($result = mysqli_fetch_array($q,MYSQLI_ASSOC)){
			echo $result['uid'].',';
		}
		break;
	case 'get':
		$id = mysqli_real_escape_string($conn,$_GET['id']);
		$q = mysqli_query($conn,"select data from `sc_form` where `uid`='$id' limit 1");
		if($result = mysqli_fetch_array($q,MYSQLI_ASSOC)){
			echo $result['data'];
		}
		break;
	case 'mark':
		$id = mysqli_real_escape_string($conn,$_GET['id']);
		mysqli_query($conn,"update `sc_form` set `read`=1 where `uid`='$id'");
		if(mysqli_affected_rows($conn)>0){
			echo 'done';
		}
		break;
	default:
		// code...
		break;
}
?>
