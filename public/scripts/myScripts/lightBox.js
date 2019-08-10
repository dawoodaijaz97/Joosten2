


$("document").ready(function () {



    let worksRow = $(".gallery");


    for(let i =0; i<lightBoxGallery.length; i++) {
        console.log(lightBoxGallery[i]);
        let worksCard = $("<div class=galleryCard>\n" +
            "            <div>\n" +
            "                <div class=\"link blurOut\">\n" +
            "                    <img src=\"images/lightBox/monkoh.jpg\" class=\"image img-fluid text-ceter\">\n" +
            "                </div>\n" +
            "            </div>\n" +
        "                <div class=\"rightBox rightLess\">\n" +
        "                   <div class='details'>\n" +
        "                       <p class='title'></p>" +
            "                   <p class='year'>xyz</p>\n" +
            "                   <p class='size'>xyz</p>\n" +
            "                   <p class='material'>xyz</p>\n" +
        "               </div>\n" +
            "           </div>\n" +
            "</div>");

        worksCard.attr("id", lightBoxGallery[i].title2);
        worksCard.find(".link").attr("./" + lightBoxGallery[i].title2 + ".html");
        worksCard.find("img").attr("src", "./images/lightBox/" + lightBoxGallery[i].img).attr("alt", lightBoxGallery[i].title);
        worksCard.find(".title").text(lightBoxGallery[i].title);
        worksCard.find(".year").text(lightBoxGallery[i].year);
        worksCard.find(".size").text(lightBoxGallery[i].size);
        worksCard.find(".material").text(lightBoxGallery[i].material);
        worksRow.append(worksCard);
    }
});