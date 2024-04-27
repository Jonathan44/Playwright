function oddNumbers(maxNumber)
{
    for(let index=0;index<=maxNumber;index++)
    {
        if(index%2!=0)
        {
            console.log(index);
        }
    }
}
oddNumbers(25)