var goTop = document.querySelector('.goTop');
window.onscroll = function () {
    var height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height >= 670) {
        goTop.style.display = 'block';
        tan.style.left='800px'; //动画部分
        suo.style.right='800px';
        shijie.style.top='400px';
    } else {
        goTop.style.display = 'none';
       
    }
    if(height <= 370){
        tan.style.left='0px';
        suo.style.right='0px';
        shijie.style.top='0px';
    }
}
goTop.onclick = function () {
    window.scrollTo({//跳转至
        top: 0,
        behavior: "smooth"//光滑
    })
}

