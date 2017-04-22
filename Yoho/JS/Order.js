
var provence=document.getElementsByClassName("provence")[0];
var city=document.getElementsByClassName("city")[0];

var provenceStr=new Array("湖南省","湖北省","福建省");
for(var i=0;i<provenceStr.length;i++){
    var op=document.createElement("option");
    op.innerHTML=provenceStr[i];
    op.value=provenceStr[i];
    provence.options.add(op);
}
var citystr=new Array();
 citystr[0]=new Array("衡阳市","长沙市","株洲市");
 citystr[1]=new Array("武汉市","武昌市","赤壁市");
 citystr[2]=new Array("泉州市","福州市","家具市");
function provencechange() {
    var num=provence.selectedIndex;
    var a=citystr[num];
    var city=document.getElementsByClassName("city")[0];
    city.length=0;
    for(var i=0;i<a.length;i++){
        var op2=document.createElement("option");
        op2.innerHTML=a[i];
        op2.value=a[i];
        city.options.add(op2);
    }

}



var mydiv2=document.getElementById("mydiv2");
var cli=document.getElementById("cli");

function show() {
    mydiv2.style.display="block";
}

var del=document.getElementById("del");
function hidden() {
    mydiv2.style.display=none;
}
var baocun=document.getElementById("baocun");
var clii=document.getElementById("clii");
function show1() {
    mydiv2.style.display="none";
    clii.style.display="block";
}