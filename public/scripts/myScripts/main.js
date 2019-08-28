$("document").ready(function () {

    let work_dropDown = $("#works");
    let dropDown = $(".my-dropdown-menu");
    dropDown.slideUp();
    work_dropDown.on("click",function () {
        dropDown.slideToggle()
    });

    let hamburger = $(".navbar-toggler");
    let block = $(".block");
    hamburger.on("click",function () {
        if(block.hasClass("block-show")){
            block.animate({
                opacity:0
            },500,function () {
                block.removeClass("block-show").addClass("block-dshow")
            });

        }else{
            block.removeClass("block-dshow").addClass("block-show")
            block.animate({
                opacity:1
            },500);
        }
    });

});
