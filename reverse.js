var a= 234;
var r = 0;
while(a>0)
{
    r=r*10;
    r=r+a%10;
    a=parseInt(a/10);
}
console.log("reversed number = "+r);
