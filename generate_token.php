<?php
	$link=parse_url(getenv("CLEARDB_DATABASE_URL"));
	header('Acess-Control-Allow-Origin: http://localhost:8100');
    $server = $url["host"];
    $username = $url["user"];
    $password = $url["pass"];
    $db = substr($url["path"],1);

    mysqli_connect($server, $username, $password);
	
	$order=$_GET['order'];
	$data=json_decode($order);
	$userID=$_GET['userID'];
	
	
	$date=time();
	
	$t=mysqli_query($link,"SELECT Max(OrderID)+1 FROM orders");
	foreach($data)
	{
		mysqli_query($link,"INSERT INTO orders('OrderDate','ItemID','UserID','isComplete') VALUES (".$date.",".$data['key'].",".$userID.","."0".")");
		mysqli_query($link,"UPDATE orders SET Barcode= ".$t." FROM orders)");
	}
	echo $t;
	
?>