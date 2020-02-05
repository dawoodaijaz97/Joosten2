$("document").ready(function () {


    let current_page = 0;
    let worksRow = $(".gallery");


    create_gallery(0);

    worksRow.append("" +
        "<div class='pagination-box'>" +
        "   <nav aria-label='Page navigation example'>" +
        "       <ul class='pagination'>" +
        "           <li class='page-item'>" +
        "               <a class='page-link' page='prev' href='#' aria-label='Previous'>" +
        "                   <span aria-hidden='true'>&laquo;</span>" +
        "               </a>" +
        "           </li>" +
        "           <li class='page-item'><a class='page-link' href='#' page='prev'>Prev</a></li>" +
        "           <li class='page-item'><a class='page-link  active' href='#' page='0'  >1</a></li>" +
        "           <li class='page-item'><a class='page-link' href='#' page='1' >2</a></li>" +
        "           <li class='page-item'><a class='page-link' href='#' page='2' >3</a></li>" +
        "           <li class='page-item'><a class='page-link' href='#' page='next' >Next</a></li>" +
        "           <li class='page-item'>" +
        "               <a class='page-link' page='next' href='#' aria-label='Next'>" +
        "                   <span aria-hidden='true'>&raquo;</span>" +
        "               </a>" +
        "           </li>" +
        "       </ul>" +
        "   </nav>" +
        "</div>");


    if (sculptureGallery.length > 15) {


        let page_links = $(".page-link");
        page_links.on("click", function (e) {
            console.log(e.target);
            let min = 0;
            let page = $(e.target);
            page = page.attr("page");
            console.log(page);
            // noinspection JSJQueryEfficiency
            $("[page='" + current_page + "']").removeClass("active");
            if (page === '0') {
                min = 0;
                current_page = 0;
            }
            else if (page === '1') {
                min = 15;
                current_page = 1;
            }
            else if (page === '2') {
                min = 30;
                current_page = 2;
            }
            create_gallery(min);


            if (page === "prev") {
                let next_page = current_page - 1;
                if (next_page >= 0 && next_page <= 2) {
                    current_page -= 1
                }
                let elem = $("[page='" + current_page + "']");
                console.log("page to display=", elem.attr("page"));
                elem.trigger("click");
            }
            else if (page === "next") {
                let next_page = current_page + 1;
                if (next_page >= 0 && next_page <= 2) {
                    current_page += 1
                }
                let elem = $("[page='" + current_page + "']");
                console.log("page to display=", elem.attr("page"));
                elem.trigger("click")
            }
            // noinspection JSJQueryEfficiency
            $("[page='" + current_page + "']").addClass("active");

        });
    }

    function create_gallery(min) {
        let max = min + 15;
        worksRow.find(".galleryCard").remove();
        worksRow.find(".galleryCard2").remove();
        let pagination_box = $(".pagination-box").detach();
        for (let i = min; i < max && i < sculptureGallery.length; i++) {
            console.log(sculptureGallery[i]);
            let worksCard = $("<div class=galleryCard>" +
                "            <div>" +
                "                <div class='link blurOut'  data-toggle='modal' data-target=''>" +
                "                    <img src='images/sculptures/Cadence.jpg' class='image img-fluid text-center'>" +
                "                </div>" +
                "                   <div class='modal  fade' id='' tabindex='-1' role='dialog' aria-hidden='true' >" +
                "                       <div class='modal-dialog modal-dialog-centered modal-xl' role='document'>" +
                "                           <div class='modal-content'>" +
                "                               <div class='modal-header'>" +
                "                                   <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                "                                       </button>" +
                "                               </div>" +
                "                               <div class='modal-body'>" +
                "                                   <img src=''>" +
                "                               </div>" +
                "                           </div>" +
                "                       </div>" +
                "                       </div>" +
                "               <div class='rightBox'>" +
                "                   <div class='details'>" +
                "                       <p class='title'></p>" +
                "                       <p class='year'></p>" +
                "                       <p class='area'></p>" +
                "                       <p class='area2'></p>" +
                "                       <p class='country'></p>" +
                "                       <p class='size'></p>" +
                "                       <p class='material'></p>" +
                "               </div>" +
                "           </div>" +
                "</div>");
            let imgName = sculptureGallery[i].img;
            let imgNameSize = imgName.length;
            console.log(imgName.substring(imgNameSize - 5, imgNameSize - 4));
            let style = imgName.substring(imgNameSize - 5, imgNameSize - 4);
            if (style === "v") {
                worksCard.removeClass("galleryCard").addClass("galleryCard2");
                worksCard.find(".rightBox").addClass("rightMore")
            } else {
                worksCard.find(".rightBox").addClass("rightLess")
            }
            worksCard.attr("id", sculptureGallery[i].title2);
            worksCard.find(".link").attr("./" + sculptureGallery[i].title2 + ".html");
            worksCard.find("img").attr("src", "./images/sculptures/" + sculptureGallery[i].img).attr("alt", sculptureGallery[i].title);
            worksCard.find(".title").text(sculptureGallery[i].title);
            worksCard.find(".blurOut").attr("data-target", "#" + sculptureGallery[i].title2 + "modal" + i);
            worksCard.find(".modal").attr("id", sculptureGallery[i].title2 + "modal" + i);
            worksCard.find(".modal-body img").attr("src", "./images/sculptures/" + sculptureGallery[i].img).attr("alt", sculptureGallery[i].title);

            if (sculptureGallery[i].size !== "") {
                worksCard.find(".size").text(sculptureGallery[i].size);
            } else {
                worksCard.find(".size").remove();
            }
            if (sculptureGallery[i].material !== "") {
                worksCard.find(".material").text(sculptureGallery[i].material);
            } else {
                worksCard.find(".material").remove();
            }
            if (sculptureGallery[i].year !== "")
                worksCard.find(".year").text(sculptureGallery[i].year);
            else {
                worksCard.find(".year").remove();
            }
            if (sculptureGallery[i].area !== "")
                worksCard.find(".area").text(sculptureGallery[i].area);
            else {
                worksCard.find(".area").remove();
            }

            if (sculptureGallery[i].country !== "")
                worksCard.find(".country").text(sculptureGallery[i].country);
            else {
                worksCard.find(".country").remove();
            }
            if (sculptureGallery[i].area2 !== "")
                worksCard.find(".area2").text(sculptureGallery[i].area2);
            else {
                worksCard.find(".area2").remove();
            }

            let texts = worksCard.find(".details").children();
            let no_texts = texts.length;
            console.log(texts.length);
            if (no_texts === 2) {
                worksCard.find(".rightBox").addClass("bottom2")
            }
            if (no_texts === 3) {
                worksCard.find(".rightBox").addClass("bottom3")
            }
            else if (no_texts === 4) {
                worksCard.find(".rightBox").addClass("bottom4")
            }
            else if (no_texts === 5) {
                worksCard.find(".rightBox").addClass("bottom5")
            }
            else if (no_texts === 6) {
                worksCard.find(".rightBox").addClass("bottom6")
            }
            else if (no_texts === 7) {
                worksCard.find(".rightBox").addClass("bottom7")
            }
            worksRow.append(worksCard);
        }
        let scroll_pos = (0);
        worksRow.append(pagination_box);
        $('html, body').animate({scrollTop: (scroll_pos)}, 250);

    }

    if (window.innerWidth < 1250) {
        console.log("Removing Model");
        $(".modal").attr("id"," ");
    }

});