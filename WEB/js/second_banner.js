// 捲動到某區段

$('.secondbanner li').click(function(){
    
    var _num_a = $(this).index(); //按到第幾個鈕
    $('html,body').stop(true,false).animate({scrollTop: $('h2').eq(_num_a).offset().top - 192},2000);
    // 往上移動到offset距離，再扣回banner總高
})



// team分頁的第二選單動畫
var secondbanner_ul = $(".secondbanner ul");

$window.on("scroll", function(e) {
	
	// 依照實際排版偵測各個區段的界限
    // console.log(this.scrollY);
	
	// 移到第二個標籤
    if (this.scrollY >= 485 && this.scrollY < 1660){
      secondbanner_ul.addClass('RA');
    }else{
      secondbanner_ul.removeClass('RA');
    }

	// 移到第三個標籤
    if (this.scrollY >= 1660 && this.scrollY < 2915){
      secondbanner_ul.addClass('PHD');
    }else{
      secondbanner_ul.removeClass('PHD');
    }

	// 移到第四個標籤
    if (this.scrollY >= 2915){
      secondbanner_ul.addClass('MS');
    }else{
      secondbanner_ul.removeClass('MS');
    }


});

