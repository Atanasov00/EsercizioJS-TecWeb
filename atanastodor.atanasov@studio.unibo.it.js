function hideImages(element){
    $(".slider-image > img").hide();
    element.show();
}
function showNext(element){
    element.next().show();
}
function showPrev(element){
    element.prev().show();
}

$(document).ready(function(){
    $(".slider-image > img").hide();
    $("div img:first-child").addClass("current");
    for(var i = 1; i <= 2; i++){
        $(`div img:nth-child(${i})`).show();    
    }
    $("img").click(function(){
        if(!$(this).hasClass("current")){
            $("img").removeClass("current");
            $(this).addClass("current");
        }
        if($(this).next().is("img") && $(this).prev().is("img")){
            hideImages($(this));
            showNext($(this));
            showPrev($(this));
        } else if($(this).prev().is("img")){
                hideImages($(this));
                showPrev($(this));
            } else if($(this).next().is("img")){
                    hideImages($(this));;
                    showNext($(this));
                }
        }    
    )
});