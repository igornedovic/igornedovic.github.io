$(document).ready(function(){

    $(".nav-icon-jquery").click(function(){
        var meni = $(".main-nav-jquery");
        var icon = $(".nav-icon-jquery i");

        // meni se pojavljuje na klik tri crtice
        meni.slideToggle(400);

        // kada kliknemo na tri crtice pojavice se zatvarajuca ikonica
        if(icon.hasClass("fas fa-bars")){
            icon.addClass("far fa-window-close");
            icon.removeClass("fas fa-bars");
        } else {
            icon.addClass("fas fa-bars");
            icon.removeClass("far fa-window-close");
        }
    })
})




