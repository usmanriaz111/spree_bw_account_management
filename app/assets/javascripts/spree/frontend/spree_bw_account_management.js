// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'
$(document).ready(function()
{
    var navItems = $('.admin-menu li > a');
    var navListItems = $('.admin-menu li');
    var allWells = $('.admin-content');
    var allWellsExceptFirst = $('.admin-content:not(:first)');
    
    allWellsExceptFirst.hide();
    navItems.click(function(e)
    {
        e.preventDefault();
        navListItems.removeClass('active');
        $(this).closest('li').addClass('active');
        
        allWells.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });

    //$("#address-info-sec").fadeTo(2000, 500).slideUp(500, function(){
    //$("#address-info-sec").slideUp(500);
    //});

    $("#btn-new-address").click(function() {
      $('html, body').animate({
          scrollTop: $("#new_address").offset().top
      }, 2000);
    });
});