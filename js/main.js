$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})

/* 

This jQuery code creates a tab switching function:

When the page is loaded ($(document).ready()), it waits for the DOM to be ready.

When a tab is clicked ($('ul.tabs li').click()), it:

Gets the clicked tab’s data-tab attribute value (tab_id).

Removes the current class from all tabs and all tab content areas.

Adds the current class to the clicked tab and the matching content element (by id).

*/