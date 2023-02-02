$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});


// 年齢自動計算
$(function () {
  var today = new Date();
  document.querySelectorAll('[data-birth]').forEach(function (element) {
  var birth = element.getAttribute('data-birth');
  if (birth.match(/^\d{4}(-|\/)\d{2}(-|\/)\d{2}$/)) {
  var birthDate = new Date(birth);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
  }
  age = Math.max(age, 0);
  element.innerHTML = age;
  }
  });
})();



//表示時フェードイン
$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(500);
	},2500);
});
