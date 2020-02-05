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
        $(".scent-arch").attr("href","./scent-architecture.html");
        $(".about").attr("href","./about.html");
        $(".joosten-black").attr("href","./joosten-black.html");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture.html");
        $(".contact").attr("href","./contact.html")
    }else{
        $(".jp").addClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture-jp.html");
        $(".about").attr("href","./about-jp.html");
        $(".joosten-black").attr("href","./joosten-black-jp.html");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture-jp.html");
        $(".contact").attr("href","./contact-jp.html")
    }

    $(".eng").on("click",()=>{
        localStorage.setItem("lang","eng");
        $(".eng").addClass("highlight");
        $(".jp").removeClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture.html");
        $(".about").attr("href","./about.html");
        $(".joosten-black").attr("href","./joosten-black.html");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture.html");
        $(".contact").attr("href","./contact.html")
    });

    $(".jp").on("click",()=>{
        localStorage.setItem("lang","jp");
        $(".jp").addClass("highlight");
        $(".eng").removeClass("highlight");
        $(".scent-arch").attr("href","./scent-architecture-jp.html");
        $(".about").attr("href","./about-jp.html");
        $(".joosten-black").attr("href","./joosten-black-jp.html");
        $("#Scentarchitecture").find(".link").attr("href","./scent-architecture-jp.html");
        $(".contact").attr("href","./contact-jp.html")
    });
});
