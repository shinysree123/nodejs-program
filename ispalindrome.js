var a=232;
var b=a;
var r=0;
while(b>0)
{
    r=r*10;
    r=r+b%10;
    b=parseInt(b/10);
}
if (r==a)
     console.log(a+ "is palindrome");
else
    console.log(a + "is not palindrome");