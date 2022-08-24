$(function(){

    $(".scrollBar>ul>li").click(function(){
        var sNum=$(this).index();

        $(this).addClass("active")
        .siblings().removeClass("active");

        $(".imgBox1>ul>li>a>img").stop().animate({
            "margin-left":-sNum*200+"%"
        },1000)

        $(".imgBox1>ul>li>a>p").stop().animate({
            "margin-left":-sNum*200+"%"
        },1000)

        $(".mainimg>ul>li>a>img").stop().animate({
            "margin-left":-sNum*102+"%"
        },1000)
       
    })  

    $(".review").bxSlider({
        maxSlides:3,
        minSlides:2,
        slideWidth:460,
        slideMargin:10,
        moveSlides:1
    })

    $(".ham").click(function () {
        if ($("#nav>li").css("display") == "none") {
          $("#nav>li").show(); //display :none 일떄
        } else {
          $("#nav>li").hide(); //display :block 일떄
        }
      });
      $(window).resize(function () {
        if (window.innerWidth >1280) {
          $("#nav>li").css("display", "block");
        } else {
          $("#nav>li").css("display", "none");
        }
      });
   
// const ham = document.querySelector('#nav');
// const menu = document.querySelector('#nav');


// ham.addEventListener('click', () => {
//   menu.classList.toggle('active');
  
// });

})