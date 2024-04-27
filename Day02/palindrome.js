let input = "Sus"
let reversed = ""
function palindrome(input)
{
   input = input.toLowerCase();
    for (i=input.length-1; i>=0 ;i--)
    {
        reversed=reversed+input[i];

    }
    
    return input===reversed;

}

console.log(palindrome(input));