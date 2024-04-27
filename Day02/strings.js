//Example 1 : Split
let words = `Hello World`
let splitWords = words.split(` `);
console.log(`Example 1:`);
console.log(splitWords[1]);
console.log(splitWords.length);

//Example 2: trim, split, length
let sentence = ` fly me  to the moon `;
let trimmed = sentence.trim();
let splitSentence = trimmed.split(` `);
console.log(`Example 2:`);
console.log(splitSentence[splitSentence.length-1]);

//Example 3: Anagram
function isAnagram(string1, string2)
{
    let letter1 = string1.trim().toLowerCase().split('').sort();
    let letter2 = string2.trim().toLowerCase().split('').sort();
    let flag = false;
    for(index=0;index<=letter1.length-1;index++)
    {
        if(letter1[index]===letter2[index])
        flag=true;
    }
    if(flag==true)
    console.log(`The words ${string1} and ${string2} are Anagrams!`);
    else
    console.log(`The words ${string1} and ${string2} are not Anagrams!`);
}

isAnagram('listen','silent');


