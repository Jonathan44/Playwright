const nums =[2,4,5,2,1,2];
const k =2;
let count =0;
for(let index =0 ; index<=nums.length-1; index++)
{
    if(nums[index]==k)
    count++;
}
console.log(count);