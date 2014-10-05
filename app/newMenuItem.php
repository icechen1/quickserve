<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$ItemDescription=$_POST['itemDesc'];
	$ImageURL=$_POST['imageURL'];
	$CategoryName=$_POST['CategoryID'];
	$ItemName=$_POST['ItemName'];
	$Price=$_POST['Price'];
	
	$menu=mysqli_query($link,"INSERT INTO items (ItemDescription,  ImageURL,  CategoryID,  ItemName,  Price) VALUES (".$ItemDescription.",".$ImageURL."," . $CategoryID."," .$ItemName.",". $Price.")");
?>