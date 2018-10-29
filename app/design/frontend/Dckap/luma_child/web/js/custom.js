require(['jquery'],function($){

    $('#search_mini_form .search').click(function(){
		   $('.block-search input').addClass("full_input");
		   $('#search_mini_form .search').addClass("src");
 	}); 
});

require(['jquery'],function($){
$(".mobile-nav--open").click(function(){
    $("html").toggleClass("nav-open");
	$("header").toggleClass("mobile-header-fixed");	
});
$(".mobile-nav-close-icon").click(function(){
    $("html").toggleClass("nav-open");
	$("header").toggleClass("mobile-header-fixed");	
});
});

//require(['jquery'],function($){
//
//    $('.header').click(function(){
//		if($('.block-search input').hasClass('full_input')){
//        $('.block-search input').removeClass('full_input');
//        }else{
//         $('.block-search input').addClass("full_input");
//		 
//        }
//     	if($('#search_mini_form .search').hasClass('src')){
//        $('#search_mini_form .search').removeClass('src');
//        }else{
//         $('#search_mini_form .search').addClass("src");
//		 
//        }
//	}); 
//	
//});



