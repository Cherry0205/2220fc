/**
 * Created by cherry on 2017/4/19.
 */
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

