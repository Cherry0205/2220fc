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
