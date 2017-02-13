window.onload = function(){
    scrollPic();
};

var scrollPic = function () {
    //banner
    var banner = document.getElementById('adver');
//    ͼƬ���
    var width = banner.offsetWidth;
//    ͼƬ����
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
        //console.log('��������');
        if(index >= 8){
            index = 0;
        }else if(index <= 0){
            index = 8;
        }

        // �Ƴ�����
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
