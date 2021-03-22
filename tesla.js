function checkempty()
{
var pass=document.getElementById("password").Value;

if(pass=="")
{
    document.getElementById("alert").innerHTML="please enter your passord!";
    return false;
}
if(pass.length<8)
{
    document.getElementById("alert").innerHTML="please don't enter more than 8 characters"
    return false;
}
if(pass.length>15)
{
    document.getElementById("alert").innerHTML="please password must be less than 15 characters"
    return false;
}
else{

    alert("password is correct")
}

}