function getXPosition(id){
    var e=document.getElementById(id);
    var x=e.offsetLeft;
    while(e=e.offsetParent){
        x += e.offsetLeft;
    }
    return x;
}

var pianyi=getXPosition("tbcc");
var t1;
var nowsroll=1;
var imgs=new Array(8);
imgs[0]="images/gallery/1.png";
imgs[1]="images/gallery/2.png";
imgs[2]="images/gallery/3.png";
imgs[3]="images/gallery/4.png";
imgs[4]="images/gallery/5.png";
imgs[5]="images/gallery/6.png";
imgs[6]="images/gallery/7.png";
imgs[7]="images/gallery/8.png";
imgs[8]="images/gallery/9.png";
var tabletop="<table style='width:100%'><tr>";
var tableend="</tr></table>";

function inidata(){
    var t1=tabletop;
    var t2=tabletop;
    var t3=tabletop;
    for(i=((nowsroll-1)*3-3);i<((nowsroll-1)*3);i++){
        var k=i;
        if(k<0){
            k=k+imgs.length
        }
        t1 += "<td><img  src=" + imgs[k] + "  /></td>";
    }
    for(i=((nowsroll-1)*3);i<(((nowsroll-1)*3)+3);i++){
        t2 += "<td><img src=" + imgs[i] + "  /></td>";
    }
    for(i=((nowsroll-1)*3+3);i<((nowsroll-1)*3+6);i++){
        var k=i;
        if(k>imgs.length-1){
            k=k-imgs.length
        }
        t3+="<td><img src="+imgs[k]+"  /></td>";
    }
    t1+=tableend;
    t2+=tableend;
    t3+=tableend;
    document.getElementById("scroll1").innerHTML=t1;
    document.getElementById("scroll2").innerHTML=t2;
    document.getElementById("scroll3").innerHTML=t3;
    document.getElementById("cscroll").scrollLeft=getXPosition("scroll2")-pianyi;
}
function next() {
    nowsroll+=1;
    if(nowsroll>3){nowsroll=1;}
    t1=window.setTimeout("changepa()",30);
}
function pre() {
    nowsroll-=1;
    if(nowsroll<1){nowsroll=3;}
    t1=window.setTimeout("changepb()",30);
}
function changepa() {
    window.clearTimeout(t1);
    if(document.getElementById("cscroll").scrollLeft>=getXPosition("scroll3")-pianyi){inidata();}
    else{document.getElementById("cscroll").scrollLeft+=10;t1=window.setTimeout("changepa()",5);}
}
function changepb() {
    window.clearTimeout(t1);
    if(document.getElementById("cscroll").scrollLeft<=getXPosition("scroll1")-pianyi){inidata();}
    else{document.getElementById("cscroll").scrollLeft-=10;t1=window.setTimeout("changepb()",5);}
}

inidata();

$(document).on("click", "#tbcc img", function () {
    console.log("catch you")
})