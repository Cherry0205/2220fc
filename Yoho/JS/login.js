var topRightli2=document.getElementsByClassName("topRightli2")[0];
var topRightli4=document.getElementsByClassName("topRightli4")[0];
var topRightbottom1=document.getElementsByClassName("topRight-bottom1")[0];
var topRightbottom2=document.getElementsByClassName("topRight-bottom2")[0];
topRightli2.onmouseover=function () {
    topRightli2.style.background="#EAECEB";
    topRightbottom1.style.display="block";
    window.clearTimeout(time);
}
function a() {
    topRightli2.style.background="none";
    topRightbottom1.style.display="none";
}
var time;

topRightli2.onmouseout=function () {
    time=window.setTimeout(a,1000);
}
topRightbottom1.onmouseover=function () {
    window.clearTimeout(time);
}
topRightbottom1.onmouseout=function () {
    time=window.setTimeout(a,1000);
}



var time1;
function b() {
    topRightli4.style.background="none";
    topRightbottom2.style.display="none";
}
topRightli4.onmouseover=function () {
    topRightli4.style.background="#EAECEB";
    topRightbottom2.style.display="block";
    window.clearTimeout(time1);
}
topRightli4.onmouseout=function () {
    time1=window.setTimeout(b,1000);
}
topRightbottom2.onmouseover=function () {
    window.clearTimeout(time1);
}
topRightbottom2.onmouseout=function () {
    time1=window.setTimeout(b,1000);
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
    loginMethod1.style.background="url(../image/sprite.passport.png) -311px -29px";
    loginMethod1.style.color="white";
    loginMethod2.style.color="black";
    loginMethod2.style.background="none";
    form1.style.display="block";
    form2.style.display="none";
}
loginMethod2.onclick=function () {
    loginMethod1.style.background="none";
    loginMethod2.style.background="url(../image/sprite.passport.png) -311px -29px";
    loginMethod1.style.color="black";
    loginMethod2.style.color="white";
    form1.style.display="none";
    form2.style.display="block";
}


var move=document.getElementsByClassName("move")[0];
var moveButton=document.getElementsByClassName("moveButton")[0];
var moveButton2=document.getElementsByClassName("moveButton2")[0];
var movein=document.getElementsByClassName("movein")[0];
var smallMove=document.getElementsByClassName("smallMove")[0];

var x;

moveButton.onmousedown=function (e) {
    moveButton.style.display="none";
    moveButton2.style.display="block";
    movein.style.display="block";
    x=parseInt(e.clientX);
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
    if(x1>970){
        x1=970;
    }else if(x1<753){
        x1=753;
    }else{
        x1 = parseInt(ee.clientX);
        if(x1==900){
            alert("验证通过");
        }
    }
    var X = x1 - x;
    var X1=x1-753;
    moveButton2.style.left = X + "px";
    smallMove.style.marginLeft=X1+"px";
}




var tel=document.getElementsByClassName("tel")[0];

tel.onblur=function () {
    var reg;
    reg=/[0-9]{5,11}/;
    if(reg.test(tel.value)){
        alert("输入成功");
    }else{
        alert("输入不符，请重新输入");
    }
}




var message=document.getElementsByClassName("message")[0];
var getMessage=document.getElementsByClassName("getMessage")[0];
var arr=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

getMessage.onclick=function () {
    var random=new Array();
    random.length=4;
    message.value="";
    for(var i=0;i<4;i++){
        random[i]=arr[  Math.floor(Math.random()*36)  ];
        message.value+=random[i];
    }
    message.innerHTML=random[i];
}

var submit=document.getElementsByClassName("submit");
submit[0].onclick=function () {
    alert("登陆成功");
}
submit[1].onclick=function () {
    alert("登陆成功");
}