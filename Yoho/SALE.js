var top1=document.getElementsByClassName("top1")[0];
var topLeft=document.getElementsByClassName("topLeft")[0];
var topRight=document.getElementsByClassName("topRight")[0];
var vipPic1=document.getElementsByClassName("vipPic1")[0];
var vipPic2=document.getElementsByClassName("vipPic2")[0];
var i=1;
window.setInterval(function () {
    top1.src="image/sale"+i+".jpg" ;
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
    vipnav1.style.background="url(image/navactive-green-first.png) no-repeat";
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
    vipnav1.style.background="";
    vipnav2.style.background="url(image/navactive-red-middle.png) ";
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
    vipnav1.style.background="";
    vipnav2.style.background="";
    vipnav3.style.background="url(image/navactive-red-middle.png) ";
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
    vipnav1.style.background="";
    vipnav2.style.background="";
    vipnav3.style.background="";
    vipnav4.style.background="url(image/navactive-red-middle.png)";
    vipnav4.style.backgroundSize="233px 40px";
    vipnav5.style.background="";
}
vipnav5.onclick=function () {
    span1.style.color="gray";
    span2.style.color="gray";
    span3.style.color="gray";
    span4.style.color="gray";
    span5.style.color="white";
    vipnav1.style.background="";
    vipnav2.style.background="";
    vipnav3.style.background="";
    vipnav4.style.background="";
    vipnav5.style.background="url(image/navactive-red-last.png) no-repeat" ;
}