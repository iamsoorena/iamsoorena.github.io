$(document).ready(function () {
    $(".panel-heading").addClass("collapsed");
});

function toggle(el) {
    if($(el).css('opacity') == 0){
        Materialize.fadeInImage(el);
    }
    else{
        $(el).animate({'opacity':0},200);
    }
}


