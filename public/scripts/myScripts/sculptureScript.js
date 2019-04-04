$("document").ready(function () {
    let sculpturesRow = $(".sculptures");

    for (let i = 0; i < sculptures.length; i++) {
        console.log(sculptures[i]);
        let sculptureCard = $(" " +
            "<div class=\"col-md-5 col-sm-10 sculptureCard\" id=\"sarabande\">" +
            "  <div>" +
            "    <img class=\"img-fluid\" src=\"../../public/images/Sarabande.jpg\" alt=\"Sarabande.jpg\">" +
            "  </div>" +
            "  <div class=\"titleCont\">" +
            "   <p class=\"title\">Sarabande</p>" +
            "  </div>" +
            "</div>");

        sculptureCard.attr("id",sculptures[i].title);
        sculptureCard.find("img").attr("src","./images/sculptures/"+sculptures[i].title+".jpg");
        sculptureCard.find(".title").text(sculptures[i].title);
        sculpturesRow.append(sculptureCard);
    }

});