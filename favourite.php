<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$userID=$_POST['UserID'];
	$token=$_POST['token'];
	
	foreach($item)
	{
		mysqli_query($link,"INSERT INTO favourites ('UserID','OrderID','Barcode') VALUES ('".$userID"','(SELECT OrderID FROM orders WHERE Barcode=".$token" LIMIT 1)','".$token."')");
	}
	
?>