const nums = [2,4,7,8,11,14];
const target = 18;
let results = [];
let sum;
for(i=0;i<=nums.length-1;i++)
{
    for(j=0;j<=nums.length-1;j++)
    {
        sum = nums[i]+nums[j];
        if(sum==target)
        results[i,j] = `${nums[i]}+${nums[j]} >> (${i},${j})`;

    }
    
}
console.log(results);