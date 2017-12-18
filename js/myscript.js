window.onload=myfun;
function myfun()
{
    var btn = document.getElementById("float-btn");
    btn.style.display = "block";
    btn.style.display = "none";
}

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var btn = document.getElementById("float-btn");

    console.log(scrollTop);

    if (scrollTop > 700) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}


window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数
function resizeBannerImage()
{
    var haha = document.getElementById("testt");
    var hahaha = document.getElementById("testtt");
    var width11 = document.documentElement.clientWidth;

    if(width11 > 480){
        haha.style.display = 'none';
        hahaha.style.display = 'block';
    }
    if(width11 <= 480){
        haha.style.display = 'block';
    }
}

function test() {
    var haha = document.getElementById("testt");
    var hahaha = document.getElementById("testtt");

    if (haha.style.display == 'none') {
        haha.style.display = 'block';
        hahaha.style.display = 'block';
    }
    else {
        haha.style.display = 'none';
        hahaha.style.display = 'none';
    }
    // alert("是的，这是一个骗局！");
    // alert(scrollTop); //获取滚动条到顶部的垂直高度
    // alert($(window).width()); //浏览器时下窗口可视区域宽度
    // alert($(document).width());//浏览器时下窗口文档对于象宽度
}




// window.addEventListener("scroll", function() {
//     // var flag = false;
//
//
//     console.log(scrollTop);
//     var btn = document.getElementById("float-btn");
//
//
//     // btn.style.display = "block"
//
//     if(scrollTop >= 1000) {
//         // btn.style.display = "";
//         btn.style.opacity = 1 ;
//         btn.style.visibility ="visible";
//
//     }else{
//         // btn.style.display = "none";
//         btn.style.visibility ="hidden";
//     }
// });








