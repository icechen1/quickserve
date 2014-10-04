<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$RestID=$_POST['RestID'];
	
	$menu=mysqli_query($link,"SELECT I.ItemName,I.ItemDescription,I.ImageURL, C.CategoryName FROM items AS I INNER JOIN categories AS C ON I.CategoryID=C.CategoryID WHERE RestaurantID=".$RestID." ORDER BY CategoryID");
	
	$i=0;
	while($row = mysqli_fetch_array($menu)) {
		$ItemName[$i]=$row['ItemName'];
		$ItemDesc[$i]=$row['ItemDescription'];
		$ImageURL[$i]=$row['ImageURL'];
		$CategoryName[$i]=$row['CategoryName'];
		$i=$i+1;
	}
	
	$s=json_encode($row);
	echo $s;
?>