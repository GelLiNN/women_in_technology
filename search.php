<?php
$name = $_POST['name'];
$name = strtolower($name);
$data = file('data.txt');

//lines are saved in data.txt with hyphen separating name from bio
foreach ($data as $line) {
	$line = split("-", $line);
	$len = strlen($name);
	$temp = strtolower($line['0']);
	$temp = substr($temp, 0, $len);
	
	if ($name != "" && $name == $temp) {
		echo "<strong>";
		echo $line['0'];
		echo "</strong> -- ";
		echo $line['1'];
		echo "0";
	}
}
?>