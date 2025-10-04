

<script>
  $(document).ready(function () {
    function toggleCarousel() {
      if ($(window).width() < 900) {
        if (!$(".destinations").hasClass("slick-initialized")) {
          $(".destinations").slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        }
      } else {
        if ($(".destinations").hasClass("slick-initialized")) {
          $(".destinations").slick("unslick");
        }
      }
    }

    toggleCarousel();
    $(window).on("resize", toggleCarousel);
  });
</script>
