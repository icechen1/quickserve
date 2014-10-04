<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$userID=$_POST['userID'];
	
	$r=mysqli_query($link,"SELECT orders.orderDate, items.ItemName, orders.price FROM orders INNER JOIN items ON items.ItemID=orders.ItemID WHERE orders.UserID=".$userID);
	$i=0;
	while($row = mysqli_fetch_array($r)) {
		$ItemName[$i]=$row['ItemName'];
		$orderDate[$i]=$row['orderDate'];
		$price[$i]=$row['price'];
		
			$data[$i]['ItemName']=$ItemName[$i];
			$data[$i]['orderDate']=$orderDate[$i];
			$data[$i]['price']=$price[$i];
			
		$i=$i+1;
	}
	
	$s=json_encode($data);
	echo $s;
?>