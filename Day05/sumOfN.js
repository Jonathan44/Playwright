let sum =0;
let n = 5;
function sumOfN(number)
{
    for(index = 0;index<=number;index++)
    {
        sum = sum+index;
    }
}
sumOfN(n);
console.log(`Sum of ${n} is ${sum}` );