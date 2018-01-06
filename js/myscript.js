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
<!--page counter part-->
function addCount (Counter) {
    url=$('.article-date').attr('href').trim();
    title = $('.article-title').text().trim();
    var query=new AV.Query(Counter);
    //use url as unique idnetfication
    query.equalTo("url",url);
    query.find({
        success: function(results){
            if(results.length>0)
            {
                var counter=results[0];
                counter.fetchWhenSave(true); //get recent result
                counter.increment("time");
                counter.save();
            }
            else
            {
                var newcounter=new Counter();
                newcounter.set("title",title);
                newcounter.set("url",url);
                newcounter.set("time",1);
                newcounter.save(null,{
                    success: function(newcounter){
                        //alert('New object created');
                    },
                    error: function(newcounter,error){
                        alert('Failed to create');
                    }
                });
            }
        },
        error: function(error){
            //find null is not a error
            alert('Error:'+error.code+" "+error.message);
        }
    });
}
$(function(){
    var Counter=AV.Object.extend("Counter");
    //only increse visit counting when intering a page
    if ($('.article-title').length == 1)
        addCount(Counter);
    var query=new AV.Query(Counter);
    query.descending("time");
    // the sum of popular posts
    query.limit(10);
    query.find({
            success: function(results){
                for(var i=0;i<results.length;i++)
                {
                    var counter=results[i];
                    title=counter.get("title");
                    url=counter.get("url");
                    time=counter.get("time");
                    // add to the popularlist widget
                    showcontent=title+" ("+time+")";
                    //notice the "" in href
                    $('.popularlist').append('<li><a href="'+url+'">'+showcontent+'</a></li>');
                }
            },
            error: function(error){
                alert("Error:"+error.code+" "+error.message);
            }
        }
    )
});







