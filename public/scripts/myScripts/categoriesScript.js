
$("document").ready(function () {
    let worksRow = $(".works");


    for(let i =0; i<categories.length; i++){
        console.log(categories[i]);
        let worksCard = $(
            "<div class=\"col-md-5 align col-sm-10  categoriesCard\" id=\"\">\n" +
            "    <div class='blurOut'>\n" +
            "        <a href=\"\" class=\"link\">\n" +
            "             <img class=\"image img-fluid text-center\" src=\"\" alt=\"\">\n" +
            "        </a>\n" +
        "         </div>\n" +
            "    <div class=\"titleCont\">\n" +
            "       <p>" +
            "           <a href=\"#\" class=\"title\">Sarabande</a>\n"+
            "       </p>"+
            "    </div>\n" +
            "</div>");

        worksCard.attr("id",categories[i].title2);
        worksCard.find(".link").attr("./"+categories[i].title2+".html");
        worksCard.find("img").attr("src","./images/categories/"+categories[i].img).attr("alt",categories[i].title);
        worksCard.find(".title").text(categories[i].title);

        worksRow.append(worksCard);
    }
});