function test() {
    var haha = document.getElementById("testt");
    var hahaha = document.getElementById("testtt");
    var scrollTop = document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;




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