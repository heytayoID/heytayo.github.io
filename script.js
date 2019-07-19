// smut rol
$('.page-scroll').on('click',function (e){

var tujuan = $(this).attr('href');
var	elementTujuan = $(tujuan);

$('html').animate({
	scrollTop : elementTujuan.offset().top
},1000);

e.preventDefault();

});
// end smut rol

// paralax
$(window).scroll(function(){

	const wScroll = $(this).scrollTop();

	if (wScroll > 400) {
		$('.main-navbar').addClass('fixed-top transparan');
		$('body').addClass('padding-nav');
	}else if(wScroll < 71) {
		$('.main-navbar').removeClass('fixed-top transparan');
		$('body').removeClass('padding-nav');
	}

});
// end paralax


// hover dropdown
// $('.dropdown').on('mouseover',function () {

// $(this).addClass('show');
// console.log($(this));


// });
// $('.dropdown').mouseleave(function () {

// $(this).removeClassClass('show');


// });