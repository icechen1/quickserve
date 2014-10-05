<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$userID=$_GET['UserID'];
	$date=time();
	$item=$_GET['ItemID'];
	
	$t=mysqli_query($link,"SELECT Max(OrderID)+1 FROM orders");
	foreach($item)
	{
		mysqli_query($link,"INSERT INTO orders('OrderDate','ItemID','UserID','isComplete') VALUES (".$date.",".$item.",".$userID.","."0".")");
		mysqli_query($link,"UPDATE orders SET Barcode= ".$t." FROM orders)");
	}
	echo $t;
	
?>