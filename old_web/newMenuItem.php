<?php
	 $url=parse_url(getenv("CLEARDB_DATABASE_URL"));

    $server = $url["host"];
    $username = $url["user"];
    $password = $url["pass"];
    $db = substr($url["path"],1);

    mysqli_connect($server, $username, $password);


    mysqli_select_db($db);
	
	$ItemDescription=$_POST['itemDesc'];
	$ImageURL=$_POST['imageURL'];
	$CategoryID=$_POST['CategoryID'];
	$ItemName=$_POST['ItemName'];
	$Price=$_POST['Price'];
	
	$menu=mysqli_query($url,"INSERT INTO Items (ItemDescription,  ImageURL,  CategoryID,  ItemName,  Price) VALUES (".$ItemDescription.",".$ImageURL."," . $CategoryID."," .$ItemName.",". $Price.")");
?>