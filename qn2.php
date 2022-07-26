
<?php
function fibonacciSequence($value)
{
    $fibArray = array(0, 1);
    $i = 2;
    while (true) {
        $fibArray[$i] = $fibArray[$i - 1] + $fibArray[$i - 2];
        if ($fibArray[$i] > $value) {
            break;
        }
        $i++;
    }

    return $fibArray;
}
function changeValue($arr)
{
    $fibonacciArr = fibonacciSequence(max($arr));
    var_dump($fibonacciArr);
    $resultArray = [];
    foreach ($arr as $val) {
        array_push($resultArray, in_array($val,$fibonacciArr) ? -1 : $val);
    }
    return $resultArray;
}
function main()
{
    $input = (int)readline("enter a nth term:");
    $naturalArr = range(1, $input);
    echo "the natural number upto {$input} term :";
    echo implode(",", $naturalArr);
    echo "the output  is :";
    echo implode(",", changeValue($naturalArr));
}
main();
?>