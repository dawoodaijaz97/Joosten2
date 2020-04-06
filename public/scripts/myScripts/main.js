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
            block.removeClass("block-dshow").addClass("block-show");
            block.animate({
                opacity:1
            },500);
        }
    });

    if(localStorage.getItem("lang") === null){
        localStorage.setItem("lang","eng");
    }
    let lang = localStorage.getItem("lang");



    if(lang === "eng"){
        $(".eng").addClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture.htm");
        $(".about").attr("href","./about.htm");
        $(".joosten-black").attr("href","./joosten-black.htm");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture.htm");
        $(".contact").attr("href","./contact.htm");
        $(".disclaimer a").attr("href","./disclaimer.htm");
    }else{
        $(".jp").addClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture-jp.htm");
        $(".about").attr("href","./about-jp.htm");
        $(".joosten-black").attr("href","./joosten-black-jp.htm");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture-jp.htm");
        $(".contact").attr("href","./contact-jp.htm");
        $(".disclaimer a").attr("href","./disclaimer-jp.htm");
    }

    $(".eng").on("click",()=>{
        localStorage.setItem("lang","eng");
        $(".eng").addClass("highlight");
        $(".jp").removeClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture.htm");
        $(".about").attr("href","./about.htm");
        $(".joosten-black").attr("href","./joosten-black.htm");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture.htm");
        $(".contact").attr("href","./contact.htm");
        $(".disclaimer a").attr("href","./disclaimer.htm");
    });

    $(".jp").on("click",()=>{
        localStorage.setItem("lang","jp");
        $(".jp").addClass("highlight");
        $(".eng").removeClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture-jp.htm");
        $(".about").attr("href","./about-jp.htm");
        $(".joosten-black").attr("href","./joosten-black-jp.htm");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture-jp.htm");
        $(".contact").attr("href","./contact-jp.htm");
        $(".disclaimer a").attr("href","./disclaimer-jp.htm");
    });
});
