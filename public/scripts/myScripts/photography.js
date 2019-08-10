


$("document").ready(function () {



    let worksRow = $(".gallery");


    for(let i =0; i<photographyGallery.length; i++) {
        console.log(photographyGallery[i]);
        let worksCard = $("<div class=galleryCard>\n" +
            "            <div>\n" +
            "                <div class=\"link blurOut\">\n" +
            "                    <img src=\"images/photography/326L.jpg\" class=\"image img-fluid text-ceter\">\n" +
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

        if(i === 0 || i === 3){
            worksCard.removeClass("galleryCard").addClass("galleryCard2");
            worksCard.find(".rightBox").addClass("rightMore")
        }
        else{
            worksCard.find(".rightBox").addClass("rightLess")
        }
        worksCard.attr("id", photographyGallery[i].title2);
        worksCard.find(".link").attr("./" + photographyGallery[i].title2 + ".html");
        worksCard.find("img").attr("src", "./images/photography/" + photographyGallery[i].img).attr("alt", photographyGallery[i].title);
        worksCard.find(".title").text(photographyGallery[i].title);
        worksCard.find(".year").text(photographyGallery[i].year);
        worksCard.find(".size").text(photographyGallery[i].size);
        worksCard.find(".material").text(photographyGallery[i].material);
        worksRow.append(worksCard);
    }
});