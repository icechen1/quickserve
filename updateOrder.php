<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$token=$_POST['token'];
	
	$=mysqli_query($link,"UPDATE orders SET isComplete="."1"." WHERE orders.OrderID=".$token);
	
	
	
?>