var topRightli2=document.getElementsByClassName("topRightli2")[0];
var topRightli4=document.getElementsByClassName("topRightli4")[0];
var topRightbottom1=document.getElementsByClassName("topRight-bottom1")[0];
var topRightbottom2=document.getElementsByClassName("topRight-bottom2")[0];
topRightli2.onmouseover=function () {
    topRightli2.style.background="#EAECEB";
    topRightbottom1.style.display="block";
}
topRightli2.onmouseout=function () {
    topRightli2.style.background="none";
    topRightbottom1.style.display="none";
}
topRightli4.onmouseover=function () {
    topRightli4.style.background="#EAECEB";
    topRightbottom2.style.display="block";
}
topRightli4.onmouseout=function () {
    topRightli4.style.background="none";
    topRightbottom2.style.display="none";
}

var qrCode=document.getElementsByClassName("qrCode")[0];
var qrCode2=document.getElementsByClassName("qrCode2")[0];
var contentRight=document.getElementsByClassName("content-Right")[0];
var contentRight2=document.getElementsByClassName("content-Right2")[0];
qrCode.onclick=function () {
    contentRight.style.display="none";
    contentRight2.style.display="block"
}
qrCode2.onclick=function () {
    contentRight.style.display="block";
    contentRight2.style.display="none"
}
var loginMethod1=document.getElementsByClassName("loginMethod1")[0];
var loginMethod2=document.getElementsByClassName("loginMethod2")[0];
var form1=document.getElementsByClassName("form1")[0];
var form2=document.getElementsByClassName("form2")[0];
loginMethod1.onclick=function () {
    loginMethod1.style.background="url(image/sprite.passport.png) -311px -29px";
    loginMethod1.style.color="white";
    loginMethod2.style.color="black";
    loginMethod2.style.background="none";
    form1.style.display="block";
    form2.style.display="none";
}
loginMethod2.onclick=function () {
    loginMethod1.style.background="none";
    loginMethod2.style.background="url(image/sprite.passport.png) -311px -29px";
    loginMethod1.style.color="black";
    loginMethod2.style.color="white";
    form1.style.display="none";
    form2.style.display="block";
}
var moveButton=document.getElementsByClassName("moveButton")[0];
var moveButton2=document.getElementsByClassName("moveButton2")[0];
var movein=document.getElementsByClassName("movein")[0];
var move=document.getElementsByClassName("move")[0];
var smallMove=document.getElementsByClassName("smallMove")[0];

var x;
moveButton.onmousedown=function (e) {
    moveButton.style.display="none";
    moveButton2.style.display="block";
    movein.style.display="block";
    x=parseInt(e.clientX);
console.log(x);
}
moveButton2.onmouseup=function () {
    moveButton.style.display="block";
    moveButton2.style.display="none";
    movein.style.display="none";
}
moveButton2.onmouseout=function () {
    moveButton.style.display="block";
    moveButton2.style.display="none";
    movein.style.display="none";
}

move.onmousemove=function (ee) {
    var x1;
    x1 = parseInt(ee.clientX);
    console.log(x1);
    var X = x1 - x;
    var X1=x1-753;
    moveButton2.style.left = X + "px";
    smallMove.style.marginLeft=X1+"px";
}
