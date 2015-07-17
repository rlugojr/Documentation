(function() {
    window.addEventListener("DOMContentLoaded", function() {

        // Wrapp / Unwrapp the list of a category classes
        $('.categoryTitle').click(function() {
            $(this).next().toggle(150);
        });

        var listClassesAlpha        = $("#classes_classesListByAlpha");
        var listClassesTags         = $("#classes_classesListByTag");

        var orderByTagButton        = $("#orderByTags");
        var orderByAlphaButton      = $("#orderByAlpha");

        /**
         * Display the list of classes, ordered by name
         */
        function showClassesByAlpha(evt) {
            if (listClassesAlpha.hasClass('hidden')) {
                listClassesAlpha.removeClass('hidden');
                listClassesTags.addClass('hidden');

                orderByTagButton.toggleClass('selectedOrder');
                orderByAlphaButton.toggleClass('selectedOrder');

                localStorage.orderClassesby = 'alpha';
            }
        }
        function showClassesByTags(evt) {
            if (listClassesTags.hasClass('hidden')) {
                listClassesAlpha.addClass('hidden');
                listClassesTags.removeClass('hidden');

                orderByTagButton.toggleClass('selectedOrder');
                orderByAlphaButton.toggleClass('selectedOrder');

                localStorage.orderClassesby = 'tags';
            }

            // if a tag has been seleted, open the correct list
            if(window.localStorage.selectedTag){
                $.each($('.categoryTitle'), function(i, categoryTitle){
                    if($(categoryTitle).parent('.category').attr('id') == window.localStorage.selectedTag){
                        if($(categoryTitle).next().is(':hidden')){
                            $(categoryTitle).next().toggle(150);
                        }
                    }
                });
            }
        }

        orderByAlphaButton.click(showClassesByAlpha);
        orderByTagButton.click (showClassesByTags);

        /**
        * Get the older selected order, and apply it
        */
        if(localStorage.orderClassesby) {
            if(localStorage.orderClassesby == 'tags') {
                showClassesByTags();
            }
            else if(localStorage.orderClassesby == 'alpha') {
                showClassesByAlpha();
            }
        }
    });
})();