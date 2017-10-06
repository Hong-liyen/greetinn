<script>
$(function () {
  // rwd選單
  $(".nav-icon").on('click', function () {
    $(this).toggleClass("on");
    $(".menu ul").toggleClass('hidden');
  });
  // 輪播
  $('.slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400
  })
})
</script>