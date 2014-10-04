<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$userID=$_POST['UserID'];
	$date=time();
	$item=$_POST['ItemID'];
	
	$menu=mysqli_query($link,"INSERT INTO orders('OrderDate','ItemID','UserID') VALUES (".$date.", ".$item.",".$userID.")");

	
?>