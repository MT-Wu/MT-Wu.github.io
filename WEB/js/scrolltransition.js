
    var wrap = $(".wrap");
    var logo = $(".logo");

$(window).on("scroll", function(e) {
    console.log(this.scrollY);
    console.log(wrap.height());
  if (this.scrollY > 45) {
    logo.addClass("logo2");
  } 
  else {
    logo.removeClass("logo2");
  }
  
});

