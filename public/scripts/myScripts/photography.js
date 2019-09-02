


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
            "                   <p class='title'></p>" +
            "                   <p class='year'></p>\n" +
            "                   <p class='area'></p>\n" +
            "                   <p class='area2'></p>\n" +
            "                   <p class='country'></p>\n" +
            "                   <p class='size'></p>\n" +
            "                   <p class='material'></p>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "</div>");

        let imgName = photographyGallery[i].img;
        let imgNameSize = imgName.length;
        console.log(imgName.substring(imgNameSize-5,imgNameSize-4));
        let style = imgName.substring(imgNameSize-5,imgNameSize-4);
        if(style === "v"){
            worksCard.removeClass("galleryCard").addClass("galleryCard2");
            worksCard.find(".rightBox").addClass("rightMore")
        }else{
            worksCard.find(".rightBox").addClass("rightLess")
        }
        worksCard.attr("id", photographyGallery[i].title2);
        worksCard.find(".link").attr("./" + photographyGallery[i].title2 + ".html");
        worksCard.find("img").attr("src", "./images/photography/" + photographyGallery[i].img).attr("alt", photographyGallery[i].title);
        worksCard.find(".title").text(photographyGallery[i].title);


        if(photographyGallery[i].size !== ""){
            worksCard.find(".size").text(photographyGallery[i].size);
        }else{
            worksCard.find(".size").remove();
        }
        if(photographyGallery[i].material !== ""){
            worksCard.find(".material").text(photographyGallery[i].material);
        }else{
            worksCard.find(".material").remove();
        }
        if(photographyGallery[i].year !== "")
            worksCard.find(".year").text(photographyGallery[i].year);
        else{
            worksCard.find(".year").remove();
        }
        if(photographyGallery[i].area !== "")
            worksCard.find(".area").text(photographyGallery[i].area);
        else{
            worksCard.find(".area").remove();
        }

        if(photographyGallery[i].country !== "")
            worksCard.find(".country").text(photographyGallery[i].country);
        else{
            worksCard.find(".country").remove();
        }
        if(photographyGallery[i].area2 !== "")
            worksCard.find(".area2").text(photographyGallery[i].area2);
        else{
            worksCard.find(".area2").remove();
        }

        let texts = worksCard.find(".details").children();
        let no_texts = texts.length;
        console.log(texts.length);
        if(no_texts === 2){
            worksCard.find(".rightBox").addClass("bottom2")
        }
        if(no_texts === 3){
            worksCard.find(".rightBox").addClass("bottom3")
        }
        else if(no_texts ===4){
            worksCard.find(".rightBox").addClass("bottom4")
        }
        else if(no_texts ===5){
            worksCard.find(".rightBox").addClass("bottom5")
        }
        else if(no_texts ===6){
            worksCard.find(".rightBox").addClass("bottom6")
        }
        else if(no_texts ===7){
            worksCard.find(".rightBox").addClass("bottom7")
        }
        worksRow.append(worksCard);
    }
});