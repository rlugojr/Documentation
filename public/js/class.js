(function() {
    var MIN = 300;
    var MIN_PX = MIN+"px";

    var MAX = 900;
    var MAX_PX = MAX+"px";

    var pauseEvent = function(e){
        if(e.stopPropagation) e.stopPropagation();
        if(e.preventDefault) e.preventDefault();
        //e.cancelBubble=true;
        //e.returnValue=false;
        return false;
    };

    $(document).ready(function() {
        // Create scrollbars
        $('.classBar').perfectScrollbar();
        $('.classContent').perfectScrollbar();

        // get DOM
        //var rs = $("#resizeBar");
        //var cb = $(".classBar");
        //var cc = $(".classContent");

        var rs = $("#resizeBar").get(0);
        var cb = $(".classBar").get(0);
        var cc = $(".classContent").get(0);

        // Enable drag event
        var isDragging = false;
        $("#resizeBar").mousedown(function(evt) {
            isDragging = true;
            // pause event to avoid text selection everywhere
            pauseEvent(evt);
            $(document).css('cursor', 'col-resize', 'important');
        });

        var resize = function(px) {
            rs.style.left = px+"px";
            cb.style.width = px+"px";
            cc.style.marginLeft = px + "px";
            cc.style.width = 'calc(100% - '+(px+"px")+')';
        };

        $(document).mousemove(function(evt) {
            if (isDragging) {
                // pause event to avoid text selection everywhere
                pauseEvent(evt);
                if (evt.clientX <= MIN) {
                    // resize minimum size
                    resize(MIN);
                }
                else if (evt.clientX >= MAX) {
                    // resize maximum size
                    resize(MAX);
                }
                else {
                    // resize
                    resize(evt.clientX);
                }
            }
        });
        $(document).mouseup(function(evt) {
            isDragging = false;
        });
    });
})();