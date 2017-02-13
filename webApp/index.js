window.onload = function(){
    scrollPic();
};

var scrollPic = function () {
    //banner
    var banner = document.getElementById('adver');
//    图片宽度
    var width = banner.offsetWidth;
//    图片盒子
    var imgBox = banner.getElementsByTagName('ul')[0];

    var index = 0;

    var addTransition = function(){
        imgBox.style.transition = "all .3s ease 0s";
        imgBox.style.webkitTransition = "all .3s ease 0s";
    };
    var removeTransition = function(){
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    };

    var setTransform = function (t) {
        imgBox.style.transform = 'translateX('+t+'px)';
        imgBox.style.webkitTransform = 'translateX('+t+'px)';
    };

    var timer = setInterval(function () {
        index++;
        addTransition();
        setTransform(-index*width);
    },3000);

    imgBox.addEventListener('transitionEnd', function () {
        if(index >= 8){
            index = 0;
        }else if(index <= 0){
            index = 8;
        }

        setTransform(-index*width);
    },false);

    imgBox.addEventListener('webkitTransitionEnd', function () {
        //console.log('过度完了');
        if(index >= 8){
            index = 0;
        }else if(index <= 0){
            index = 8;
        }

        // 移除过度
        removeTransition();
        setTransform(-index*width);

    },false);

    var aside = document.getElementsByTagName('aside');
    var figure = document.getElementsByTagName('figure');

    for (var i = 0;i < figure.length;i++) {
        figure[i].index = i;
        figure[i].onmouseenter = function () {

            aside[this.index].style.display = 'block';
        };

        figure[i].onmouseleave = function () {

            aside[this.index].style.display = 'none';
        };
    }
};
