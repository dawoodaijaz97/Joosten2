$("document").ready(function () {

    let name = $("#center");
    console.log(name);
    setTimeout(function () {
        addClass();
    }, 2000);

    setInterval(function () {
        addClass();
    }, 6000);




    function addClass() {
        if (name.hasClass("pulse1")) {
            name.removeClass("pulse1").addClass("pulse2")
        } else if (name.hasClass("pulse2")) {
            name.removeClass("pulse2").addClass("pulse1")
        }
    }
});

