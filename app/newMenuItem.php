<?php
	$link=mysqli_connnect("host","user","pass","db");
	
	$RestID=$_POST['RestID'];
	$ItemDescription=$_POST['itemDesc'];
	$ImageURL=$_POST['imageURL'];
	$CategoryName=$_POST['CategoryName'];
	$ItemName=$_POST['ItemName'];
	$Price=$_POST['Price'];
	
	$menu=mysqli_query($link,"INSERT INTO items ('RestID, ItemDescription,  ImageURL,  CategoryName,  ItemName,  Price') VALUES (".$RestID.",".  $ItemDescription.",".$ImageURL."," . $CategoryName."," .$ItemName.",". $Price.")");
?>