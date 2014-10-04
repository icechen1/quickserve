<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$itemID=$_POST['itemID'];
	
	$menu=mysqli_query($link,"DELETE FROM items WHERE itemID=".$itemID);
	
?>