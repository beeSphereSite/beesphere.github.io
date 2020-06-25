(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

})(jQuery);	
$(window).load(function() {
  
  
  setTimeout(function() {
    if (!$(".page_banner .page_main").parents(".menu-banner").hasClass("whoweare")){
		$(".page_banner .page_main").addClass("collapsed");
	}
}, 1000);

});



