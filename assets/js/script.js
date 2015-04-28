var petals = ["resume", "projects", "contact"];
var locations = ["zero", "one", "two"]
var text = ["readable-zero", "readable-one", "readable-two"]
$(document).ready(function() {
    $(".content").hide();
    $(".petal").click(function() {
        $("#circle").toggle();
        $(".welcome").toggle();
        if ($(this).hasClass("big")) {
            $(this).removeClass("big");
            $(".small").toggle();
            $(this).addClass("small");
            

        } else {
            $(this).removeClass("small");
            $(".small").toggle();
            $(this).addClass("big");
            
        }
        $(this).children().each(function() {
            $(this).toggle();

        });
        //$(this).toggleClass("big");
        //$(this).toggleClass("small");
    });
    $(".petal").hover(function() {
        // for (i = 0; i < petals.length; i++){
        //     if ($(this).hasClass(petals[i])){
        //       $(this).children().addClass("readable-one");  
        //     }
        //}
        // while (!$(this).hasClass(petals[0])) {
        //     var temp = petals[petals.length - 1];
        //     for (i = 0; i < petals.length; i++) {
        //         var temp2 = petals[i];
        //         petals[i] = temp;
        //         temp = temp2;
        //     }
        // }
        // console.log(petals);
        // for (i = 0; i < petals.length; i++) {
        //     $(".petal").each(function(){
        //         if ($(this).hasClass(petals[i])) {
        //             //$(this).removeClass();
        //             for (j = 0; j < locations.length; j++) {
        //                 $(this).removeClass(locations[j]);
        //             }
        //             $(this).addClass(locations[i]);
        //             //$(this).addClass(petals[i]);
        //         }
        //     });
        // }
    }, function() {
        $(this).children().removeClass("readable-one");
    });
});