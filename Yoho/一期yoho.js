var topLeft=document.getElementsByClassName("topLeft")[0];
var topLeftbottom=document.getElementsByClassName("topLeft-bottom")[0];
var timeyo=setTimeout(function () {
    topLeftbottom.style.display="none";
},2000);

topLeft.onmouseover=function () {
    topLeftbottom.style.display="block";
    topLeft.style.background="#dcdcdc";
}

topLeft.onmouseout=function () {
    timeyo();
}


topLeftbottom.onmouseover=function () {
    clearTimeout(timeyo);
    topLeftbottom.style.display="block";
}

topLeftbottom.onmouseout=function () {
    topLeftbottom.style.display="none";
}



var buycar=document.getElementsByClassName("buycar")[0];
var buycar2=document.getElementsByClassName("buycar2")[0];
buycar.onmouseover=function () {
    buycar2.style.display="block";
}
buycar.onmouseout=function () {
    buycar2.style.display="none";
}

var picture=document.getElementsByClassName("picture")[0];
var picLeft=document.getElementsByClassName("picLeft")[0];
var picRight=document.getElementsByClassName("picRight")[0];
var picture1=document.getElementsByClassName("picture1")[0];
var picture2=document.getElementsByClassName("picture2")[0];
var i=1;
var v;
window.setInterval(function () {
        picture.style.background="url(image/index"+i+".jpg) " ;
        picture.style.backgroundSize="100% 100% " ;
        i++;
        if(i>2){
            i=1;
        }
        v=i;
},1000)

picLeft.onclick=function () {
    picture.style.background="url(image/index"+v+".jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    v--;
    if(v==1){
        v=2;
    }
}
picRight.onclick=function () {
    picture.style.background="url(image/index"+v+".jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    v++;
    if(v==2){
        v=1;
    }
}

picture1.onclick=function () {
    picture.style.background="url(image/index1.jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    var i=1;
    window.setTimeout(function () {
        picture.style.background="url(image/index"+i+".jpg) " ;
        picture.style.backgroundSize="100% 100% " ;
        i++;
        if(i>2){
            i=1;
        }
        v=i;
    },1000);
}
picture2.onclick=function () {
    picture.style.background="url(image/index2.jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    var i=1;
    window.setTimeout(function () {
        picture.style.background="url(image/index"+i+".jpg) " ;
        picture.style.backgroundSize="100% 100% " ;
        i++;
        if(i>2){
            i=1;
        }
        v=i;
    },1000);
}






var branLi1=document.getElementsByClassName("branLi1")[0];
var branLi2=document.getElementsByClassName("branLi2")[0];
var branLi3=document.getElementsByClassName("branLi3")[0];






var footEndradio1=document.getElementsByClassName("footEnd-radio1")[0];
var footEndradio2=document.getElementsByClassName("footEnd-radio2")[0];
var footEndradio3=document.getElementsByClassName("footEnd-radio3")[0];
var footCenterdiv1=document.getElementsByClassName("footCenter-div1")[0];
var footCenterdiv2=document.getElementsByClassName("footCenter-div2")[0];
var footCenterdiv3=document.getElementsByClassName("footCenter-div3")[0];

footEndradio1.onclick=function () {
        footEndradio1.checked="checked";
        footEndradio2.checked="";
        footEndradio3.checked="";
        footCenterdiv1.style.display="block";
        footCenterdiv2.style.display="none";
        footCenterdiv3.style.display="none";
    }

footEndradio2.onclick=function () {
    footEndradio1.checked="";
    footEndradio2.checked="checked";
    footEndradio3.checked="";
    footCenterdiv1.style.display="none";
    footCenterdiv2.style.display="block";
    footCenterdiv3.style.display="none";
}
footEndradio3.onclick=function () {
    footEndradio1.checked="";
    footEndradio2.checked="";
    footEndradio3.checked="checked";
    footCenterdiv1.style.display="none";
    footCenterdiv2.style.display="none";
    footCenterdiv3.style.display="block";
}



