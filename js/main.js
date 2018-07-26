
$(function(){
    let i=0;
    let size=$('.slider-image').length;
    //     //小圆点开始
    $(".dot").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        let index=$(this).index();
        i = index;//将小圆点索引赋值给轮播图索引
        $(".slider-list").stop().animate({ left: -index * 600 }, 600);
    });
    //小圆点结束

    //定时器开始
    let t = setInterval(function () { i++; move();},2000);
    $(".slider-box").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(function () { i++; move(); }, 2000);
    });
    //定时器结束

    //前后按钮开始
    $(".next").click(function () {
        i++;
        move();
    });
    $(".prev").click(function () {
        i--;
        move();
    });
    //前后按钮结束


    //轮播图移动开始
    function move(){
        if (i==5){
            $('.slider-list').css({left:0});
            i=1;
        }
        if(i==-1){
            $(".slider-list").css({left:-(size-1)*600});
            i=size-2;
        }
        $(".slider-list").stop().animate({ left: -i * 600 }, 600);
        // i++;
        if (i == size - 1) {
            $(".dot").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".dot").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});
//轮播图移动结束
