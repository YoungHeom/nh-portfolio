// #section_1에서 커서를 따라다니는 circle
$(window).mousemove(function(e) {  
    $('.circle').css({
        top: e.clientY,
        left: e.clientX
    });
});

$(window).scroll(function() {
    // 특정 섹션의 위치를 기준으로 스크롤 여부 판단
    if ($(this).scrollTop() > 400) {
        $('.circle').css('display', 'none'); 
    } else {
        $('.circle').css('display', 'block');
    }
});

// 영상 재생 속도
$(document).ready(function() {
    $('video').get(0).playbackRate = 0.8; // 비디오 속도를 절반으로 설정
});

$(window).scroll(function() {
    // 특정 섹션의 위치를 기준으로 스크롤 여부 판단
    if ($(this).scrollTop() > 10) {
        $('header').addClass('scroll'); // 스크롤 시 클래스 추가
    } else {
        $('header').removeClass('scroll'); // 원래 상태로 복구
    }
});


$(document).on('wheel', function(event) {
    event.preventDefault(); // 기본 스크롤 방지

    // 현재 스크롤 위치를 얻음
    var currentScroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var direction = event.originalEvent.deltaY > 0 ? 1 : -1; // 스크롤 방향

    if (direction === 1) {
        // 아래로 스크롤할 때
        $('html, body').stop().animate({ scrollTop: currentScroll + windowHeight }, 500);
    } else {
        // 위로 스크롤할 때
        $('html, body').stop().animate({ scrollTop: currentScroll - windowHeight }, 500);
    }
});