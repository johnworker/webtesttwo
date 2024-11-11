// 捲動效果
$(function () {
    //捲動至top0的位置
    $("#arrow").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    //指定捲軸位置淡出淡入
    // $(window).scroll(function () {
        // if ($(this).scrollTop() > 200) {
            // $('#gotop').stop().fadeTo('fast', 1);
        // } else {
            // $('#gotop').stop().fadeOut('fast');
        // }
    // });
});


// 使用者滑鼠滾動時 停止所有動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow")
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () {
    var windowTop = $(this).scrollTop();
    // console.log("視窗的上方:" + windowTop)

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime); //將時間轉為數字(整數)

    //console.log(arrowTop)
    //console.log(arrowTime)


    //如果 視窗位置 大於等於 箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    //否則就淡出
    else arrow.stop().fadeOut(arrowTimeInt)
});

// 動畫區域
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 3000; 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex); // 顯示第一張
setInterval(nextSlide, slideInterval); // 每4秒換一張

// 平滑滾動至對應區域
$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        
        var target = $($(this).attr('href'));
        
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // 1000 表示動畫持續時間，可依需求調整
        }
    });
});

