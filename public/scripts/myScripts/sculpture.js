


$("document").ready(function () {



    let worksRow = $(".gallery");

    for(let i =0; i<sculptureGallery.length; i++) {
        console.log(sculptureGallery[i]);
        let worksCard = $("<div class=galleryCard>\n" +
            "            <div>\n" +
            "                <div class=\"link blurOut\">\n" +
            "                    <img src=\"images/sculptures/Cadence.jpg\" class=\"image img-fluid text-center\">\n" +
            "                </div>\n" +
            "            </div>\n" +
            "                <div class=\"rightBox\">\n" +
            "                   <div class='details'>\n" +
            "                       <p class='title'></p>" +
            "                   <p class='year'>xyz</p>\n" +
            "                   <p class='size'>xyz</p>\n" +
            "                   <p class='material'>xyz</p>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "</div>");
        if(i === 0 || i ===2 || i ===3 || i ===4  || i ===5 || i ===7){
            worksCard.removeClass("galleryCard").addClass("galleryCard2");
            worksCard.find(".rightBox").addClass("rightMore")
        }else{
            worksCard.find(".rightBox").addClass("rightLess")
        }
        worksCard.attr("id", sculptureGallery[i].title2);
        worksCard.find(".link").attr("./" + sculptureGallery[i].title2 + ".html");
        worksCard.find("img").attr("src", "./images/sculptures/" + sculptureGallery[i].img).attr("alt", sculptureGallery[i].title);
        worksCard.find(".title").text(sculptureGallery[i].title);
        worksCard.find(".year").text(sculptureGallery[i].year);
        worksCard.find(".size").text(sculptureGallery[i].size);
        worksCard.find(".material").text(sculptureGallery[i].material);
        worksRow.append(worksCard);
    }
});