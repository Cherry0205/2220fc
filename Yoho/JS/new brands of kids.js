
var topLeft=document.getElementsByClassName("topLeft")[0];
var topLeftbottom=document.getElementsByClassName("topLeft-bottom")[0];
function timeyo () {
    topLeftbottom.style.display="none";
    topLeft.style.background="#F4F4F4";
}

topLeft.onmouseover=function () {
    topLeftbottom.style.display="block";
    topLeft.style.background="#dcdcdc";
    window.clearTimeout(time1);
}
var time1;
topLeft.onmouseout=function () {
    time1=window.setTimeout(timeyo,1000);
}

topLeftbottom.onmouseover=function () {

    window.clearTimeout(time1);
    // topLeftbottom.style.display="block";
}

topLeftbottom.onmouseout=function () {
    time1=window.setTimeout(timeyo,1000);
}

var buycar=document.getElementsByClassName("buycar")[0];
var buycar2=document.getElementsByClassName("buycar2")[0];
buycar.onmouseover=function () {
    buycar2.style.display="block";
}
buycar.onmouseout=function () {
    buycar2.style.display="none";
}

var boy=document.getElementsByClassName("boy")[0];
var girl=document.getElementsByClassName("girl")[0];
var kids=document.getElementsByClassName("kids")[0];
var nav=document.getElementsByClassName("nav")[0];
// var boy1=document.getElementsByClassName("boy1")[0];
// var boy2=document.getElementsByClassName("boy2")[0];
// var girl1=document.getElementsByClassName("girl1")[0];
// var girl2=document.getElementsByClassName("girl2")[0];
// var kids1=document.getElementsByClassName("kids1")[0];
// var kids2=document.getElementsByClassName("kids2")[0];
var BOY1=document.getElementsByClassName("BOY1")[0];
var BOY2=document.getElementsByClassName("BOY2")[0];
var GIRL1=document.getElementsByClassName("GIRL1")[0];
var GIRL2=document.getElementsByClassName("GIRL2")[0];
var KIDS1=document.getElementsByClassName("KIDS1")[0];
var KIDS2=document.getElementsByClassName("KIDS2")[0];

boy.onclick=function () {
    window.close();
    window.open("index.html");
}
girl.onclick=function () {
    window.close();
    window.open('Girls.html');
}
kids.onclick=function () {
    window.close();
    window.open("Kids.html");
}


var navCloth=document.getElementsByClassName("navCloth")[0];
var mydiv=document.getElementsByClassName("mydiv")[0];

function aa() {
    mydiv.style.display="none";
}

navCloth.onmouseover=function () {
    mydiv.style.display="block";
    window.clearTimeout(time2);
}

var time2;
navCloth.onmouseout=function () {
    time2=window.setTimeout(aa,1000);
}
mydiv.onmouseover=function () {
    window.clearTimeout(time2);
}
mydiv.onmouseout=function () {
    time2=window.setTimeout(aa,1000);
}


var li14=document.getElementById("li14");
var fashionkids=document.getElementById("fashionkids");

var flag=false;
li14.onclick=function () {
    if(flag==true){
        fashionkids.style.display="none";
    }else{
        fashionkids.style.display="block";
    }
    flag=!flag;
}





var itemsSelected=document.getElementById("items_selected");
itemsSelected.style.display="none";
var boysClose=document.getElementById("boysClose");
var a=boysClose.style.display="none";

var girlsClose=document.getElementById("girlsClose");
var b=girlsClose.style.display="none";

function closeSelect() {
    itemsSelected.style.display="none";
}

function openSelect() {
    itemsSelected.style.display="inline-block";
    itemsSelected.style.float="left";
    boysClose.style.display="inline-block";
}
