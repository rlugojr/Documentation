var orderedBy = 'tags';
var orderedClassesByTags = null;
var orderedClassesByAlpha = null;

/**
 * Set the categories toggle
 */
var toggleCategories = function() {

    // Unwrap the category which contains the actual class
    var catName = $('.h3Cat').attr('id').substring(4);
    if(!$('#category_' + catName).next().is(':visible')) {
        $('#category_' + catName).next().toggle();
    }

    $('.categoryTitle').click(function() {
        $(this).next().toggle();
    });
};

/**
 * Order the classes by tags
 */
var orderByTags = function() {

    if(orderedBy == 'alpha') {
        localStorage.orderClassesby = 'tags';
        orderedBy = 'tags';

        $('#orderByTags').addClass('selectedOrder');
        $('#orderByAlpha').removeClass('selectedOrder');

        if(orderedClassesByTags != null) {
            $('#classesListSideOrdered').html(orderedClassesByTags);
            toggleCategories();
        }
    }
};

/**
 * Order the classes by alpha
 */
var orderByAlpha = function() {

    if(orderedBy == 'tags') {
        localStorage.orderClassesby = 'alpha';
        orderedBy = 'alpha';

        $('#orderByAlpha').addClass('selectedOrder');
        $('#orderByTags').removeClass('selectedOrder');

        if(orderedClassesByAlpha != null) {
            $('#classesListSideOrdered').html(orderedClassesByAlpha);
        }
        else {
            orderedClassesByTags = $('#classesListSideOrdered').html();

            orderedClassesByAlpha = orderClassesByAlpha();
            $('#classesListSideOrdered').html(orderedClassesByAlpha);
        }
    }
};

/**
 * Get all the tags / class list from a version
 * @param version - Version of babylon
 * @returns {*} - Array of tags / class ordered by alpha
 */
var orderClassesByAlpha = function() {
    // Get all the className
    var classNames = $('.className');
    var names = [];

    // Get all the names
    for(var i = 0; i < classNames.length; i++) {
        names.push($(classNames[i]).text());
    }
    // Sort names by alpha
    names.sort();

    var htmlElement = $('<div />');
    var lastLetter = '';

    names.forEach(function(name) {

        htmlElement.append(
            $('<div />')
            .addClass('categoryList')
            .append(
                $('<li>').append(
                    $('<a>')
                    .text(name)
                    .attr('href', './'+name)
                )
            )
        );
    });

    return htmlElement;
};

/**
 * Get the older selected order, and apply iy
 */
if(localStorage.orderClassesby) {
    if(localStorage.orderClassesby == 'tags') {
        toggleCategories();
    }
    else if(localStorage.orderClassesby == 'alpha') {
        orderByAlpha();
    }
}

$('#orderByTags').click(orderByTags);

$('#orderByAlpha').click(orderByAlpha);