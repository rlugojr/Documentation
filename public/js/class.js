(function() {
    var MIN = 300;
    var MIN_PX = MIN+"px";

    var MAX = 900;
    var MAX_PX = MAX+"px";

    var pauseEvent = function(e){
        if(e.stopPropagation) e.stopPropagation();
        if(e.preventDefault) e.preventDefault();
        e.cancelBubble=true;
        e.returnValue=false;
        return false;
    };

    $(document).ready(function() {
        // Create scrollbars
        $('.classBar').perfectScrollbar();
        $('.classContent').perfectScrollbar();

        // Enable drag event
        var isDragging = false;
        $("#resizeBar").mousedown(function(evt) {
            isDragging = true;
            // pause event to avoid text selection everywhere
            pauseEvent(evt);
        });

        $(document).mousemove(function(evt) {
            if (isDragging) {
                if (evt.clientX <= MIN) {
                    // resize minimum size
                    $("#resizeBar").css("left", MIN_PX );
                    $(".classBar").css("width", MIN_PX);
                    $(".classContent")
                        .css('width', '100%')
                        .css('width', '-='+MIN_PX)
                        .css('margin-left', MIN_PX);
                }
                else if (evt.clientX >= MAX) {
                    // resize maximum size
                    $("#resizeBar").css("left", MAX_PX );
                    $(".classBar").css("width", MAX_PX);
                    $(".classContent")
                        .css('width', '100%')
                        .css('width', '-='+MAX_PX)
                        .css('margin-left', MAX_PX);
                }
                else {
                    // resize
                    $("#resizeBar").css("left", evt.clientX );
                    $(".classBar").css("width", evt.clientX);
                    $(".classContent")
                        .css('width', '100%')
                        .css('width', '-='+evt.clientX)
                        .css('margin-left', evt.clientX);
                }
                // pause event to avoid text selection everywhere
                pauseEvent(evt);
            }
        });
        $(document).mouseup(function(evt) {
            isDragging = false;
        });
    });
})();

//
//// Wrapp / Unwrapp the list of a category classes
//$('.categoryTitle').click(function() {
//    $(this).next().toggle(150);
//});
//
//var orderByTagButton = document.getElementById('orderByTags');
//var orderByAlphaButton = document.getElementById('orderByAlpha');
//var classesByTagList = document.getElementById('classesListByTag');
//var classesByAlphaList = document.getElementById('classesListByAlpha');
//
//
///**
// * Display the list of classes, ordered by tags
// */
//var showClassesByTags = function(){
//    if(classesByTagList.className == 'toggledOff' && classesByAlphaList.className == 'toggledOn'){
//
//        classesByTagList.className      = 'toggledOn';
//        classesByAlphaList.className    = 'toggledOff';
//
//        orderByTagButton.className      = 'order selectedOrder';
//        orderByAlphaButton.className    = 'order';
//
//        localStorage.orderClassesby = 'tags';
//    }
//};
//
///**
// * Display the list of classes, ordered by name
// */
//var showClassesByAlpha = function(){
//    if(classesByTagList.className == 'toggledOn' && classesByAlphaList.className == 'toggledOff'){
//
//        classesByTagList.className      = 'toggledOff';
//        classesByAlphaList.className    = 'toggledOn';
//
//        orderByTagButton.className      = 'order';
//        orderByAlphaButton.className    = 'order selectedOrder';
//
//        localStorage.orderClassesby = 'alpha';
//    }
//};
//
///**
// * Get the older selected order, and apply it
// */
//if(localStorage.orderClassesby) {
//    if(localStorage.orderClassesby == 'tags') {
//        showClassesByTags();
//    }
//    else if(localStorage.orderClassesby == 'alpha') {
//        showClassesByAlpha();
//    }
//}
//
//orderByTagButton.addEventListener('click', showClassesByTags);
//orderByAlphaButton.addEventListener('click', showClassesByAlpha);