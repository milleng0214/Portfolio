$(document).ready(function () {

    $('.view1920>.box>nav>ul>li')
        .mouseover(function () {
            $(this)
                .find('.sub')
                .stop()
                .slideDown(300)
        })
        .mouseout(function () {
            $(this)
                .find('.sub')
                .stop()
                .slideUp(300)
        });



});