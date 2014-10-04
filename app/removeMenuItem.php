<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$itemID=$_POST['itemID'];
	
	$menu=mysqli_query($link,"SELECT I.ItemName,I.ItemDescription,I.ImageURL, C.CategoryName FROM items AS I INNER JOIN categories AS C ON I.CategoryID=C.CategoryID WHERE RestaurantID=".$RestID." ORDER BY CategoryID");
	
?>