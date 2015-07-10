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

        $.each($("#classMd h3"), function(i, title){
            addPermalink(title);
        });
        $.each($("#classMd h2"), function(i, title){
            addPermalink(title);
        });

        // check if an anchor is specified in the page url
        if(window.location.toString().lastIndexOf('#') != -1){
            // gets the anchor name
            var anchorName = window.location.toString().split('#');
            anchorName = anchorName[1];

             // if anchor exists, jumps to it
            if($('#'+anchorName)){
                var $title = $("#"+anchorName);
                var title = document.getElementById(anchorName);
                $title.addClass('highlighted');
                title.scrollIntoView(true);
            }
        }
    });
})();

/**
 * Prepends every <h2> and <h3> with a little icon which highlights the selected line
 * and changes the current page url when clicked (give the possibility to the user to
 * copy-paste links directly to a method or attribute of a class, for example).
 * @param title
 */
var addPermalink = function(title){
    var titleHref = $(title).attr('id');
    $(title).prepend('<a href="#' + titleHref + '" class="invisible permalink"><i class="fa fa-link"></i></a>');

    // show the anchors only when you pass the mouse over the name of the linked method/attribute
    $(title).on('mouseover', function(evt){
        if($(title).children("a:first").hasClass('permalink')){
            $(title).children("a:first").removeClass('invisible');
        }
    }).on('mouseout', function(evt){
        if($(title).children("a:first").hasClass('permalink')){
            $(title).children("a:first").addClass('invisible');
        }
    });

    $(title).children("a:first").on('click', function(evt){
        evt.preventDefault();
        $('.highlighted').removeClass('highlighted');
        $(title).addClass('highlighted');

        var id = $(title).attr('id');
        var currentPage = window.location.toString().split('#', [0]);
        window.history.pushState({id: id}, '', currentPage + '#' + id);
    });
};