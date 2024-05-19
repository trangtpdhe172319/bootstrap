$(document).ready(function(){
    // Initialize Isotope
    var $grid = $('.isotope-container').isotope({
        itemSelector: '.col-12',
        layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('.filter-button').on('click', function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // Remove active class from all buttons
        $('.filter-button').removeClass('active');
        // Add active class to the clicked button
        $(this).addClass('active');
    });
});
