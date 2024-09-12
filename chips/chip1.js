const admin="Thanish";
const passwd="123";
function val()
{
 const a = document.getElementById("un").value;
 const b = document.getElementById("pwd").value;
 if(a === admin && b === passwd)
    {
    window.location.href="chip2.html";
    }
 else{
    alert("Invalid user name or password");
     }

}