let score = 90;
function gradeCalculator(score)
{
    switch(true)
    {
        case (score>90):
            console.log('S');
            break;
        case (score<=90 && score>=80):
            console.log('A');
            break;
        case (score<=79 && score>=70):
            console.log('B');
            break;   
        case (score<70 && score>60):
            console.log('C');
            break;  
        case (score<60 && score>50):
            console.log('D');
            break;
        default :
            console.log('F');             
    }
}
gradeCalculator(score);