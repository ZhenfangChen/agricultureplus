$(document).ready(function() {
    $("#more-species").click(function() {
        for (i = 0; i < 8; i++) {
            $(".card-container").append(
                '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="card"><img src="assets/img/cat.jpg" class="card-img-top" alt="A picture of a cute, gray and white cat with yellow eyes." title="A picture of a cute, gray and white cat with yellow eyes."><div class="card-body"><h5 class="card-title">I\'m a cat!</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><button class="btn btn-primary">Hide Me</button></div></div>'
            );
        }

        clickToHide();
    });
    $(Window).scroll(() => {
        var scrollTop = $(document).scrollTop();
        // console.log(123, scrollTop);

        if (scrollTop > 6200) {
            $(".three-lenses-wrapper .sticky-wrapper").addClass("fixed");
        } else if (scrollTop < 6200 || scrollTop > 7000) {
            $(".three-lenses-wrapper .sticky-wrapper").removeClass("fixed");
        }
    });
});
