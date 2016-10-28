// 捲動到某區段

$('.secondbanner li').click(function(){
    
    var _num_a = $(this).index(); //按到第幾個鈕
    $('html,body').stop(true,false).animate({scrollTop: $('h2').eq(_num_a).offset().top - 192},2000);
    // 往上移動到offset距離，再扣回banner總高
})


//     var wrap = $(".wrap");
//     var logo = $(".logo");

// $(window).on("scroll", function(e) {
//     // console.log(this.scrollY);
//     // console.log(wrap.height());
//   if (this.scrollY > 45) {
//     logo.addClass("logo2");
//   } 
//   else {
//     logo.removeClass("logo2");
//   }
  
// });

