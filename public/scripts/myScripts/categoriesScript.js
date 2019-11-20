
$("document").ready(function () {



    let worksRow = $(".works");


    for(let i =0; i<categories.length; i++){
        console.log(categories[i]);
        let worksCard = $(
            "<div class=\"categoriesCard\" id=\"\">\n" +
            "    <div class=\"titleCont\">\n" +
            "       <p>" +
            "           <a href=\"#\" class=\"title\">Sarabande</a>\n"+
            "       </p>"+
            "    </div>\n" +
            "</div>");

        worksCard.attr("id",categories[i].title2);
        worksCard.find(".link").attr("./"+categories[i].title2+".html");
        worksCard.find("img").attr("src","./images/categories/"+categories[i].img).attr("alt",categories[i].title);
        if(categories[i].title == "Scent architecture"){
            worksCard.find(".title").text(categories[i].title);
            worksCard.find(".titleCont").removeClass("titleCont").addClass("titleCont2");

        }else{
            worksCard.find(".title").text(categories[i].title);
        }
        if(categories[i].title == "Sculpture"){
            worksCard.find(".image").removeClass("image").addClass("image2");
        }
        if(categories[i].title == "Scent architecture"){
            worksCard.find(".blurOut").removeClass("blurOut");
            worksCard.find(".link").removeClass("link").addClass("background");
            worksCard.find(".image").removeClass("image");
            worksCard.find(".titleCont2").removeClass("titleCont2").addClass("titleCont3")
        }


        worksRow.append(worksCard);
    }
    let worksrow = $(".works");
    console.log(worksrow);
    setTimeout(function () {
        addClass();
        setInterval(function () {
            console.log("pulsating");
            addClass();
        },6000);

    }, 2000);


    function addClass() {
        if (worksrow.hasClass("pulse1")) {
            worksrow.removeClass("pulse1").addClass("pulse2")
        } else if (worksrow.hasClass("pulse2")) {
            worksrow.removeClass("pulse2").addClass("pulse1")
        }
    }


});