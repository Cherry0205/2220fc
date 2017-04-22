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



var contentRighttop=document.getElementsByClassName("contentRight-top")[0];
var contentRightspan=document.getElementsByClassName("contentRight-span")[0];

    var country=new Array("--请输入--","中国","英国","美国");
    for(var i=0;i<country.length;i++){
        var op=document.createElement("option");
        op.innerHTML=country[i];
        op.value=country[i];
        contentRighttop.options.add(op);
}

var telnum=new Array();
telnum[0]=new Array("--请输入--","","","");
telnum[1]=new Array("+00","+01","+02","+03");
telnum[2]=new Array("+10","+11","+12","+13");
telnum[3]=new Array("+20","+21","+22","+23");

function telnumChange() {
    var num=contentRighttop.selectedIndex;
    var a=telnum[num];
    var contentRightspan=document.getElementsByClassName("contentRight-span")[0];
    contentRightspan.length=0;
    for(var i=0;i<a.length;i++){
        var op2=document.createElement("option");
        op2.innerHTML=a[i];
        op2.value=a[i];
        contentRightspan.options.add(op2);
}
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

var regedit=document.getElementsByClassName("regedit")[0];
regedit.onclick=function () {
    alert("注册成功");
}
