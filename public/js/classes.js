// Wrapp / Unwrapp the list of a category classes
$('.categoryTitle').click(function() {
    $(this).next().toggle(150);
});

var orderByTagButton = document.getElementById('orderByTags');
var orderByAlphaButton = document.getElementById('orderByAlpha');
var classesByTagList = document.getElementById('classesListByTag');
var classesByAlphaList = document.getElementById('classesListByAlpha');


/**
 * Display the list of classes, ordered by tags
 */
var showClassesByTags = function(){
    if(classesByTagList.className == 'toggledOff' && classesByAlphaList.className == 'toggledOn'){

        classesByTagList.className      = 'toggledOn';
        classesByAlphaList.className    = 'toggledOff';

        orderByTagButton.className      = 'order selectedOrder';
        orderByAlphaButton.className    = 'order';

        localStorage.orderClassesby = 'tags';
    }
};

/**
 * Display the list of classes, ordered by name
 */
var showClassesByAlpha = function(){
    if(classesByTagList.className == 'toggledOn' && classesByAlphaList.className == 'toggledOff'){

        classesByTagList.className      = 'toggledOff';
        classesByAlphaList.className    = 'toggledOn';

        orderByTagButton.className      = 'order';
        orderByAlphaButton.className    = 'order selectedOrder';

        localStorage.orderClassesby = 'alpha';
    }
};

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

orderByTagButton.addEventListener('click', showClassesByTags);
orderByAlphaButton.addEventListener('click', showClassesByAlpha);