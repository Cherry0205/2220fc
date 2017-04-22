var sub=document.getElementsByClassName("sub")[0];
var num=document.getElementsByClassName("num")[0];
var add=document.getElementsByClassName("add")[0];
var onePrice=document.getElementsByClassName("onePrice")[0];
var sumPrice=document.getElementsByClassName("sumPrice")[0];
var del=document.getElementsByClassName("del")[0];
var sellBox=document.getElementById("sell-box");
sub.onclick=function () {
    var i=num.innerHTML;
    if(i>1){
        i--;
    }else{
        i;
    }
    num.innerHTML=i;
    sumPrice.innerHTML=parseFloat(i*onePrice.innerHTML);
}
add.onclick=function () {
    var i=num.innerHTML;
    i++;
    num.innerHTML=i;
    sumPrice.innerHTML=parseFloat(i*onePrice.innerHTML);
}
del.onmouseover=function () {
    del.style.color="red";
}
del.onclick=function () {
    sellBox.style.display="none";
}

var allCheck=document.getElementsByClassName("allCheck")[0];
var allCheck2=document.getElementsByClassName("allCheck2")[0];
var allCheck3=document.getElementsByClassName("allCheck3")[0];
function checka() {
    if (allCheck.checked ==true) {
        allCheck.checked="checked";
        allCheck2.checked ="checked";
        allCheck3.checked = "checked";
    }else if(allCheck.checked ==false){
        allCheck.checked="";
        allCheck2.checked ="";
        allCheck3.checked = "";
    }
}
function checkb() {
    if (allCheck3.checked ==true) {
        allCheck.checked="checked";
        allCheck2.checked ="checked";
        allCheck3.checked = "checked";
    }else if(allCheck3.checked ==false){
        allCheck.checked="";
        allCheck2.checked ="";
        allCheck3.checked = "";
    }
}
var a6=document.getElementsByClassName("a6")[0];
a6.onclick=function () {
    if(allCheck2.checked==true){
        sellBox.style.display="none";
    }
}
