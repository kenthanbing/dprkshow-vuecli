var mySwiper = new Swiper('.swiper-container',{
    autoplay:true, // 自动播放
    speed:1800, // 自动滑动开始到结束的时间(ms)
    loop:true, // 无限循环
    allowTouchMove:true, // 滑动，false不滑动
    navigation:{ // 左右按钮
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{ // 分页
        el:'.swiper-pagination',
        clickable:true, // 分页按钮是否可点击
        renderBullet:function(index,className){ // 渲染分页按钮，同时增加CSS样式
            return '<span class="' + className + '">' + '</span>';
        },
    },
    on:{
        click:function(){;},// 单击slide时触发函数
        touchStart:function(event){;},
    },
});
var box = document.getElementById('banner');
box.onmouseover = function(){
    mySwiper.autoplay.stop();
}
box.onmouseout = function(){
    mySwiper.autoplay.start();
}

//
// var mySwiper = new Swiper ('.swiper-container', {
//     // 滚动方向 horizontal/vertical
//     direction: 'horizontal',
//     // 自动播放
//     autoplay:2000,
//     // 是否循环播放
//     loop: true,
//     // 如果需要分页器（小圆点）
//     // 是否需要分页器
//     pagination: '.swiper-pagination',
//     // 点击分页器是否切换到对应的图片 是 true 否 false
//     paginationClickable:true,
//
//     // 如果需要前进后退按钮
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//
//     // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
//     // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
//     // 操作包括触碰，拖动，点击pagination等。
//     autoplayDisableOnInteraction:false,
// })
