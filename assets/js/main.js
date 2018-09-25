// animate drop down content
// select elements
var dropDownBtn = $('.dropdown-btn');
var $icon = $('i');
var dropDownContent = $('.dropdown-content');



dropDownBtn.on('click',function(){
	dropDownContent.slideToggle(500,'swing');
	// Toggle class
	$icon.toggleClass('fa-bars fa-times')
})


// Screen Width
var $window = $(window);
if($window.width()>768){
	dropDownContent.css({'display':'none'})
}


