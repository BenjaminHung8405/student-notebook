$(document).ready(function(){
    // Kiểm tra nếu jQuery đã tải
    if (typeof jQuery === "undefined") {
        console.error("jQuery chưa được tải.");
        return;
    }

    // Khởi tạo Slick Carousel nếu phần tử tồn tại
    if ($(".footer-carousel").length) {
        $(".footer-carousel").slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            dots: false,
            arrows: false
        });
    }
});

// Add toggleMenu function for direct HTML onclick event
function toggleMenu() {
    $(".menu").toggleClass("active");
    $(".menu-toggle").toggleClass("active");
    
    // Toggle no-scroll class on body to prevent background scrolling
    $("body").toggleClass("no-scroll");
}

// Close menu when clicking outside
$(document).click(function(event) {
    if (!$(event.target).closest('.menu').length && 
        !$(event.target).closest('.menu-toggle').length) {
        $(".menu").removeClass("active");
        $(".menu-toggle").removeClass("active");
        
        // Remove no-scroll class to enable scrolling again
        $("body").removeClass("no-scroll");
    }
});
