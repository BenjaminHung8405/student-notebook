$(document).ready(function(){
    $('.footer-carousel').slick({
        vertical: true,      // Hiển thị dọc
        slidesToShow: 3,     // Hiển thị 3 dòng cùng lúc
        slidesToScroll: 1,   // Cuộn từng dòng
        autoplay: true,      // Tự động chạy
        autoplaySpeed: 2000, // Thời gian chờ giữa các lần cuộn
        centerMode: true,    // Làm nổi bật item ở giữa
        dots: false,         // Không cần dots
        arrows: false        // Ẩn mũi tên
    });
});
