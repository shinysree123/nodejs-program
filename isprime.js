for(var i=2;i<500;i++)
{
    var f=0;
    for(var j=2;j<=(i/2);j++)
    {
        if(i%j==0)
        {
            f=1;
            break;
        }
          
    }
    if(f==0)
        console.log(i);
}