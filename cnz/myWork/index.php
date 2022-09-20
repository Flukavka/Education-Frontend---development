<?php

$array = [1, 9, 3, 4, 5];
$max = 0;

/* for ($i = 0; $i < count($array); $i++) {
    if (current($array) > next($array)) {
        echo current($array) . "<br>";
        echo next($array) . "<br>";

        $max = current($array);
        echo $max;
    }
} */
$i = 0;
while ($i < count($array)) {

    if (current($array) > next($array)) {
        echo current($array) . "<br>";

        $max = current($array);
        echo $max;
    }
}

//echo $max;



