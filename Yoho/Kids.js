/**
 * Created by cherry on 2017/4/1.
 */
var kidsad=document.getElementById("kidsad");
var time=window.setInterval("show()",5000);
var index=0;



function show(id) {
    if(Number(id)){
        clearInterval(time);
        index=id;
    }else{
        index=index%4+1;
    }

    document.getElementById("kidsad").setAttribute("src","image/kidsad"+index+".jpg");
    var lis=document.getElementsByTagName("li");
    for(var i=0;i<4;i++){
        lis[i].setAttribute("class","scroll_number_out");
        if(index==i+1){
            lis[i].setAttribute("class","scroll_number_over");
        }
    }
}

function start() {
    time=window.setInterval("show()",5000);
}


