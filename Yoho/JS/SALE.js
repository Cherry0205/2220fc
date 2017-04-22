

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



var topt1=document.getElementsByClassName("topt1")[0];
var topLeftt=document.getElementsByClassName("topLeftt")[0];
var topRightt=document.getElementsByClassName("topRightt")[0];
var vipPic1=document.getElementsByClassName("vipPic1")[0];
var vipPic2=document.getElementsByClassName("vipPic2")[0];
var i=1;
window.setInterval(function () {
    topt1.src="../image/sale"+i+".jpg" ;
    i++;
    if(i>2){
        i=1;
    }
    v=i;
},1000)




var vipnav1=document.getElementsByClassName("vip-nav1")[0];
var vipnav2=document.getElementsByClassName("vip-nav2")[0];
var vipnav3=document.getElementsByClassName("vip-nav3")[0];
var vipnav4=document.getElementsByClassName("vip-nav4")[0];
var vipnav5=document.getElementsByClassName("vip-nav5")[0];
var span1=document.getElementsByClassName("span1")[0];
var span2=document.getElementsByClassName("span2")[0];
var span3=document.getElementsByClassName("span3")[0];
var span4=document.getElementsByClassName("span4")[0];
var span5=document.getElementsByClassName("span5")[0];
var vipSale1=document.getElementsByClassName("vipSale1")[0];
var vipSale2=document.getElementsByClassName("vipSale2")[0];
vipnav1.onclick=function () {
    span1.style.color="white";
    span2.style.color="gray";
    span3.style.color="gray";
    span4.style.color="gray";
    span5.style.color="gray";
    vipnav1.style.background="url(../image/navactive-green-first.png) no-repeat";
    vipnav2.style.background="";
    vipnav3.style.background="";
    vipnav4.style.background="";
    vipnav5.style.background="";
    vipSale1.style.display="block";
    vipSale2.style.display="none";
}
vipnav2.onclick=function () {
    span1.style.color="gray";
    span2.style.color="white";
    span3.style.color="gray";
    span4.style.color="gray";
    span5.style.color="gray";
    vipnav1.style.background="none";
    vipnav2.style.background="url(../image/navactive-red-middle.png) ";
    vipnav2.style.backgroundSize="233px 40px";
    vipnav3.style.background="";
    vipnav4.style.background="";
    vipnav5.style.background="";
    vipSale1.style.display="none";
    vipSale2.style.display="block";
}
vipnav3.onclick=function () {
    span1.style.color="gray";
    span2.style.color="gray";
    span3.style.color="white";
    span4.style.color="gray";
    span5.style.color="gray";
    vipnav1.style.background="none";
    vipnav2.style.background="";
    vipnav3.style.background="url(../image/navactive-red-middle.png) ";
    vipnav3.style.backgroundSize="233px 40px";
    vipnav4.style.background="";
    vipnav5.style.background="";
}
vipnav4.onclick=function () {
    span1.style.color="gray";
    span2.style.color="gray";
    span3.style.color="gray";
    span4.style.color="white";
    span5.style.color="gray";
    vipnav1.style.background="none";
    vipnav2.style.background="";
    vipnav3.style.background="";
    vipnav4.style.background="url(../image/navactive-red-middle.png)";
    vipnav4.style.backgroundSize="233px 40px";
    vipnav5.style.background="";
}
vipnav5.onclick=function () {
    span1.style.color="gray";
    span2.style.color="gray";
    span3.style.color="gray";
    span4.style.color="gray";
    span5.style.color="white";
    vipnav1.style.background="none";
    vipnav2.style.background="";
    vipnav3.style.background="";
    vipnav4.style.background="";
    vipnav5.style.background="url(../image/navactive-red-last.png) no-repeat" ;
}