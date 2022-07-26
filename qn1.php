<?php
$i = 1;
$inputArray = [];
while (true) {
  echo "press q to end input:\n";
  try {
    $input = readline("enter value for {$i}:");
    if ($input == "q") {
      break;
    }
    if (!is_numeric($input)) {
      echo "hi";
      throw "invalid input";
    }

    array_push($inputArray, floatval($input));
    $i++;
  } catch (\Throwable $th) {
    echo "**** enter a valid input***";
  }
}
echo "the user input :";
print_r($inputArray);
function calc($arr)
{
  $maxValue = max($arr);
  $percentileArray = array_map(function ($value) use($maxValue) {
    return $value * (100 / $maxValue);
  }, $arr);
  $resultArray = [];
  for ($i = 0, $j = 10; $j <= 100; $i = $i + 10, $j = $j + 10) {
array_push($resultArray,count(array_filter($percentileArray,function($value) use($i,$j){
return ($i<=$value && $value<$j);
})));
  }
var_dump($percentileArray);
$resultArray[9]=$resultArray[9]+countSpecific($percentileArray, 100);

echo "the output is ";
var_dump($resultArray);

}
calc($inputArray);

function countSpecific($arr,$value){
var_dump($arr);
if (in_array($value,$arr)){
$temp=array_filter($arr, function ($val) use ($value) {
    return $val==$value;
});
return count($temp);

}
return 0;
}
