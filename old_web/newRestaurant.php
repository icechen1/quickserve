<?php
	 $url=parse_url(getenv("CLEARDB_DATABASE_URL"));

    $server = $url["host"];
    $username = $url["user"];
    $password = $url["pass"];
    $db = substr($url["path"],1);

    mysqli_connect($server, $username, $password);


    mysqli_select_db($db);
	
	$ItemDescription=$_POST['RestLat'];
	$ImageURL=$_POST['RestLong'];
	$CategoryID=$_POST['MenuID'];
	
	$menu=mysqli_query($link,"INSERT INTO Restaurants VALUES (".$RestLat.",".$RestLong.",".$MenuID.")");
?>