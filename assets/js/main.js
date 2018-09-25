// animate drop down content
// select elements
var dropDownBtn = $('.dropdown-btn');
var dropDownContent = $('.dropdown-content');
dropDownBtn.on('click',function(){
	dropDownContent.slideToggle(500,'swing');
})