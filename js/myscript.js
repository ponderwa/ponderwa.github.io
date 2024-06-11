var SelfTestModel = 0;      //默认全局变量0
window.onload=myfun;


function myfun()
{
    var btn = document.getElementById("float-btn");


    btn.style.display = "block";
    btn.style.display = "none";
    // document.write(returnCitySN["cip"]+','+returnCitySN["cname"]);

}


// window.onload=writeIp;
// function writeIp()
// {
//
//         // var xmlhttp = new XMLHttpRequest();
//         //
//         // xmlhttp.open("GET","test.txt",true);
//         // xmlhttp.send();
//
//
//     alert("是的，这是一个骗局！");
// }


window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var btn = document.getElementById("float-btn");

    // console.log(scrollTop);

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

function ontest() {
    var umbrella = document.getElementById("self-test");

    console.log('SelfTestModel='+ SelfTestModel);
    umbrella.style.color = 'yellow';
    SelfTestModel = 1 ;
    console.log('SelfTestModel='+ SelfTestModel);
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
// function addCount (Counter) {
//     url=$('.article-date').attr('href').trim();
//     title = $('.article-title').text().trim();
//     var query=new AV.Query(Counter);
//     //use url as unique idnetfication
//     query.equalTo("url",url);
//     query.find({
//         success: function(results){
//             if(results.length>0)
//             {
//                 var counter=results[0];
//                 counter.fetchWhenSave(true); //get recent result
//                 counter.increment("time");
//                 counter.save();
//             }
//             else
//             {
//                 var newcounter=new Counter();
//                 newcounter.set("title",title);
//                 newcounter.set("url",url);
//                 newcounter.set("time",1);
//                 newcounter.save(null,{
//                     success: function(newcounter){
//                         //alert('New object created');
//                     },
//                     error: function(newcounter,error){
//                         alert('Failed to create');
//                     }
//                 });
//             }
//         },
//         error: function(error){
//             //find null is not a error
//             alert('Error:'+error.code+" "+error.message);
//         }
//     });
// }
// $(function(){
//     var Counter=AV.Object.extend("Counter");
//     //only increse visit counting when intering a page
//     if ($('.article-title').length == 1)
//         addCount(Counter);
//     var query=new AV.Query(Counter);
//     query.descending("time");
//     // the sum of popular posts
//     query.limit(10);
//     query.find({
//             success: function(results){
//                 for(var i=0;i<results.length;i++)
//                 {
//                     var counter=results[i];
//                     title=counter.get("title");
//                     url=counter.get("url");
//                     time=counter.get("time");
//                     // add to the popularlist widget
//                     showcontent=title+" ("+time+")";
//                     //notice the "" in href
//                     $('.popularlist').append('<li><a href="'+url+'">'+showcontent+'</a></li>');
//                 }
//             },
//             error: function(error){
//                 alert("Error:"+error.code+" "+error.message);
//             }
//         }
//     )
// });


////////////////////////////////////////////////
<!--访问统计及记录-->
// <script>
// //获取时间&时间戳&当前页面address
// var VisitDate = new Date();
// var timestamp = VisitDate.getTime();        //当前时间点时间戳
// var VisitUrl = window.location.href;        //获取当前页面的url
// console.log(VisitDate);
// //    console.log(timestamp);
// //    console.log(VisitUrl);
//
// //存IP和时间戳       使用覆盖法---另外一个class  刷新记录每个IP最新--最后访问的时间
// var VisitRecord = AV.Object.extend('Visit_Record');
// var visit_record = new VisitRecord();
// visit_record.save({
//     Time: VisitDate,
//     IP: returnCitySN["cip"],
//     Location: returnCitySN["cname"]
// }).then(function(object) {
// //        alert('LeanCloud Rocks!aaa');
// })
//
//
// //logic part    同一个IP 5min分钟内访问任意链接（开头with localhost） 总站点访问数只+1 单独在云端搞个条目
// //              同一个IP 3min分钟内访问访问过的链接 该页面hit_counter不增加 标志变量
//
//
// //1.查询当前访问IP是否存在于Last-Visit class中 不存在--创建新条目---存在--取出条目时间戳，如果大于5分种--总站点数+1--更新条目
// //                                                                                        如果小于5分钟--更新条目
// var queryLast = new AV.Query('Last_Visit');    //创建查询Last_Visit
//
// queryLast.equalTo('UrL',VisitUrl);
// queryLast.find().then(function (results) {
//     if(results.length > 0 ) {                           //存在--取出条目时间戳，如果大于5分种--总站点数+1--更新条目
//         var aimEntry = results[0];
//         var oldTime_stamp = aimEntry.get('Last_Time');
//         console.log(oldTime_stamp);
//         var timeDifference = (timestamp - oldTime_stamp)/1000;        //1s = 1000, 1min =100000 TimeStamp单位为ms
//         console.log(timeDifference);
//
//         if(timeDifference >= 15)            //测试用15s
//         {
//             var query_SiteHit = new AV.Query('Hit_Counter');
//             query_SiteHit.get('5a88f54eac502e00329b1e62').then(function (todo) {
//                 todo.increment("HitNumber");
//                 todo.save();
//                 console.log("I'm here!");
//             });
//         }
//         aimEntry.save({                                  //注意写入权限 否则报错
//             Last_Time: timestamp
//         });
//     }
//     else{                                                       //不存在-即第一次访问 创建新条目 存时间
//         var LastVisit = AV.Object.extend('Last_Visit');
//         var visit_record = new LastVisit();
//         visit_record.save({
//             UrL: VisitUrl,
//             Last_Time: timestamp
//         });
//     }
// });
//
//
//
//
//
// //查询当前URL
// var queryHit = new AV.Query('Hit_Counter');    //创建查询Hit_Counter
//
// queryHit.equalTo('UrL',VisitUrl);              //返回值是AV.Query的Array 始终为非空-->真
// queryHit.find().then(function (results){
//         console.log(results.length);            //results.length符合要求对象个数
//         if(results.length > 0){                 //  >0和=1;  此链接hit记录已存在，更新hit数保存结束
// //            console.log(results[0]);
//             var HitNumber = results[0];
//
//             HitNumber.increment("HitNumber");
// //            HitNumber.fetchWhenSave(true);      //get recent result   fetchWhenSave和save    使用了 fetchWhenSave 选项，save 成功之后即可得到最新的值
//             HitNumber.save();
//
//             console.log("更新hit数成功");
//         }else{
//             var VisitRecord = AV.Object.extend('Hit_Counter');
//             var visit_record = new VisitRecord();
//             visit_record.save({
//                 UrL: VisitUrl,
//                 HitNumber: 1
//             });
//
//
//             console.log("增加新条目成功");
//         }
//     },function (error) {
//         console.log("there's no such thing.")
//     }
// );
// </script>







