$(function(){
    //#nav>li에 마우스를 올리면 자식으로 있는 .sub가 나오도록
    // 내 자식만 나오고 남의 자식은 들어가게 
    $("#nav>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        // $(".sub").css("display","none");
        // $(this).next().css("display","block");
        $(".sub").slideUp(500);
        $(this).next().slideDown(500);
    })
})