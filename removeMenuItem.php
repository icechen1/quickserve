<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$itemID=$_POST['itemID'];
	
	mysqli_query($link,"DELETE FROM items WHERE itemID=".$itemID);
	mysqli_query($link,"DELETE FROM restaurants_items WHERE itemID=".$itemID);
	
?>