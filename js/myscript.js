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
}