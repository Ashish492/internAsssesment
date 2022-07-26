const prompt= require("prompt-sync")();
//importing a package to get input from command line


/* 
--argument:integer type
@return the natural number upto nth of the given  argument in the form of array
*/
const getNaturalNumber = (term) =>
  Array(term)
    .fill(1)
    .map((_, key) => key + 1);




/* 
@argument:take argument as a integer
@return the nth term of the fibonacci series
*/
const getNthFibonacci = (term) => {
  if (term < 3) return 1;
  return getNthFibonacci(term - 1) + getNthFibonacci(term - 2);
};


/* 
@return the fibonacci series in the array form upto the given digit
*/
const getFibonacci=(value)=>{
let result=[];
let term=1;
while(true){
   let temp= getNthFibonacci(term)
  if(temp>value)break;
  else result.push(temp)
  term++
}
return result
}


const changeValue=(array)=>{
  const maxValue=Math.max(...array);
  const fibonacciArray=getFibonacci(maxValue);
  let resultArray=[];
  array.forEach(element => {
    resultArray.push(fibonacciArray.includes(element)?-1:element)
  });
  return resultArray;
}
function main(){
  let term=0
while(true){
   term=parseInt(prompt("enter a number:"))
  if(Number.isNaN(term)) console.log("** enter a integer**");
  else{break;}
}
let naturalNumber=getNaturalNumber(term);
console.log("The natural number:",naturalNumber.join(","))
console.log("The output is :",changeValue(naturalNumber).join(","))
}
main();