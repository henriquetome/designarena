//FLOATING MENU
var MENU = {
	sectionsHeight: {},

	init: function () {

		$(function () {

			$("#drop-nav").css("position", "fixed");

			$(window).scroll(function (e) {

				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();
				var menuBox = $("#drop-nav");
				var homeHeight = $("#home").height();
				var portHeight = $("#portfolio").height() + homeHeight;
				var clienttHeight = $("#clientes").height() + portHeight;

				if (scrollTop >= 0){
					$('.selected').removeClass("selected");
					$('.home').addClass("selected");
				}if (scrollTop >= homeHeight){
					$('.selected').removeClass("selected");
					$('.portfolio').addClass("selected");
				}if (scrollTop >= portHeight){
					$('.selected').removeClass("selected");
					$('.clientes').addClass("selected");
				}if (scrollTop >= clienttHeight){
					$('.selected').removeClass("selected");
					$('.contato').addClass("selected");
				}

				if (scrollTop > 200 && parseInt(menuBox.css("margin-top")) != "13") {
					menuBox.css("margin-top", "13px");
				} else if (scrollTop > 100 && scrollTop < 200) {
					var perc = 1 - ((scrollTop - 100) / 100);
					menuBox.css('margin-top', parseInt((13 - (93 * perc))));
				}
			});
		});
	}
};

//ROLL PAGE MENU
$(document).ready(function(){
    $('a.main-btn').smoothScroll({
        afterScroll: function() {}
    });
});

//PLACEHOLDER
$(function() {
	   if(!$.support.placeholder) {
			   var active = document.activeElement;
			   $(':text').focus(function () {
					   if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
							   $(this).val('').removeClass('hasPlaceholder');
					   }
			   }).blur(function () {
					   if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
							   $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
					   }
			   });
			   $(':text').blur();
				$('textarea').focus(function () {
					   if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
							   $(this).val('').removeClass('hasPlaceholder');
					   }
			   }).blur(function () {
					   if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
							   $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
					   }
			   });
			   $('textarea').blur();

			   $(active).focus();
			   $('form').submit(function () {
					   $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
			   });
	   }
});

//SLIDE PORTFÓLIO
$(function(){
	$(".slide").hover(function(){
		$('img', this).animate({top: "213px"}, {queue:false, duration:400});
	}, function(){
		$('img', this).animate({top: "0"}, {queue:false, duration:400})
	});

	$('#slides').slides({
		preload: true,
		generateNextPrev: true
	});

	$('#slides-testimony').slides({
		preload: true,
		generateNextPrev: true
	});

});