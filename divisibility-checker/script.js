//made by arnav kumar
//copyright all rights reserved
//writing function to check divisibility
function check(first,second){
if(first%second==0)
{
    alert(first+" is divisible by "+second);
    
    
}
else{
        alert(first+" is not divisible by "+second)
    }
    //giving an alert box that will show the result on dividing
    alert("on dividing, "+first+" by "+second+", the result was "+first/second);
//function is done now we will test it
}
//its fully working 


function check_divisibility(){
    var first= Number(document.getElementById("first").value)
var second=Number(document.getElementById("second").value)
check(first,second)
}
function reset(){
document.getElementById("first").value=""
document.getElementById("second").value=""

}




