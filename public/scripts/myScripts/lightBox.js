


$("document").ready(function () {



    let worksRow = $(".gallery");


    for(let i =0; i<lightBoxGallery.length; i++) {
        console.log(lightBoxGallery[i]);
        let worksCard = $("<div class=galleryCard>\n" +
            "            <div>" +
            "                <div class=\"link blurOut\" data-toggle='modal' data-target=''>\n" +
            "                    <img src=\"images/lightBox/monkoh.jpg\" class=\"image img-fluid text-center\">\n" +
            "                </div>" +
        "                   <div class='modal fade' id='' tabindex='-1' role='dialog' aria-hidden='true' >" +
            "                   <div class='modal-dialog modal-dialog-centered modal-xl' role='document'>" +
            "                       <div class='modal-content'>" +
            "                           <div class='modal-header'>" +
            "                               <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
        "                                   </button>" +
            "                           </div>" +
            "                           <div class='modal-body'>" +
            "                               <img src=''>" +
            "                            </div>" +
            "                       </div>" +
            "                   </div>" +
            "               </div>"+
            "            </div>\n" +
        "                <div class=\"rightBox rightLess\">\n" +
        "                   <div class='details'>\n" +
            "                   <p class='title'></p>" +
            "                   <p class='year'></p>\n" +
            "                   <p class='area'></p>\n" +
            "                   <p class='area2'></p>\n" +
            "                   <p class='country'></p>\n" +
            "                   <p class='size'></p>\n" +
            "                   <p class='material'></p>\n" +
        "                   </div>\n" +
            "           </div>\n" +
            "</div>");

        let imgName = lightBoxGallery[i].img;
        let imgNameSize = imgName.length;
        console.log(imgName.substring(imgNameSize-5,imgNameSize-4));
        let style = imgName.substring(imgNameSize-5,imgNameSize-4);
        if(style === "v"){
            worksCard.removeClass("galleryCard").addClass("galleryCard2");
            worksCard.find(".rightBox").addClass("rightMore")
        }else{
            worksCard.find(".rightBox").addClass("rightLess")
        }


        worksCard.attr("id", lightBoxGallery[i].title2);
        worksCard.find(".link").attr("./" + lightBoxGallery[i].title2 + ".htm");
        worksCard.find("img").attr("src", "./images/lightBox/" + lightBoxGallery[i].img).attr("alt", lightBoxGallery[i].title);
        worksCard.find(".title").text(lightBoxGallery[i].title);
        worksCard.find(".blurOut").attr("data-target","#"+lightBoxGallery[i].title2+"modal");
        worksCard.find(".modal").attr("id",lightBoxGallery[i].title2+"modal");
        worksCard.find(".modal-body img").attr("src", "./images/lightBox/" + lightBoxGallery[i].img).attr("alt", lightBoxGallery[i].title);

        if(lightBoxGallery[i].size !== ""){
            worksCard.find(".size").text(lightBoxGallery[i].size);
        }else{
            worksCard.find(".size").remove();
        }
        if(lightBoxGallery[i].material !== ""){
            worksCard.find(".material").text(lightBoxGallery[i].material);
        }else{
            worksCard.find(".material").remove();
        }
        if(lightBoxGallery[i].year !== "")
            worksCard.find(".year").text(lightBoxGallery[i].year);
        else{
            worksCard.find(".year").remove();
        }
        if(lightBoxGallery[i].area !== "")
            worksCard.find(".area").text(lightBoxGallery[i].area);
        else{
            worksCard.find(".area").remove();
        }

        if(lightBoxGallery[i].country !== "")
            worksCard.find(".country").text(lightBoxGallery[i].country);
        else{
            worksCard.find(".country").remove();
        }
        if(lightBoxGallery[i].area2 !== "")
            worksCard.find(".area2").text(lightBoxGallery[i].area2);
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
    if (window.innerWidth < 1250) {
        console.log("Removing Model");
        $(".modal").attr("id"," ");
    }

});