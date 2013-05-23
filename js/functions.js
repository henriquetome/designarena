//FLOATING MENU
var MENU = {
	sectionsHeight: {},

	init: function () {

		$(function () {

			$("#drop-nav").css('position', 'fixed');

			

			$(window).scroll(function (e) {

				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();
				var middleY = windowHeight / 3;

				var menuBox = $("#drop-nav");
				var homeHeight = $("#home").height();
				var portHeight = $("#portfolio").height() + homeHeight;
				var teamHeight = $("#equipe").height() + portHeight;
				var clientHeight = $("#clientes").height() + teamHeight;

				if (scrollTop >= 0){
					$('.selected').removeClass("selected");
					$('.home').addClass("selected");
					var pageTitle = "Home";
				}if (scrollTop >= homeHeight - middleY){
					$('.selected').removeClass("selected");
					$('.portfolio').addClass("selected");
					var pageTitle = "Portfólio";
				}if (scrollTop >= portHeight - middleY){
					$('.selected').removeClass("selected");
					$('.equipe').addClass("selected");
					var pageTitle = "Equipe";
				}if (scrollTop >= teamHeight - middleY){
					$('.selected').removeClass("selected");
					$('.clientes').addClass("selected");
					var pageTitle = "Clientes";
				}if (scrollTop >= clientHeight - middleY){
					$('.selected').removeClass("selected");
					$('.contato').addClass("selected");
					var pageTitle = "Contato";
				}

				if (scrollTop > 200 && parseInt(menuBox.css("margin-top")) != "13") {
					menuBox.css("margin-top", "13px");
				} else if (scrollTop > 50 && scrollTop < 200) {
					var perc = 1 - ((scrollTop - 100) / 100);
					menuBox.css('margin-top', parseInt((13 - (93 * perc))));
				}

				$('title').html(pageTitle + " - DESIGNARENA");
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

//VALIDATE FORM
$(document).ready(function(){
	$("#contact-form").validate();
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

//INFOGRAFIC
$(function(){

	var objClass = {
		"display": "block", 
		"opacity": "1"
	};

	$("#info-slides .current").css(objClass);

	$("li.info-bt").click(function(){
		$("li.select").removeClass("select");
		$(this).addClass("select");
	});

	$("li.step-1").click(function(){
		$("#info-slides .current").animate({opacity: "0"}, 500, function(){
			$("#info-slides .current").removeClass("current").css("display", "none");
			$("#info-slides .step-one").css("display", "block").animate({opacity: "1"}, 500).addClass("current");
		});
	});

	$("li.step-2").click(function(){
		$("#info-slides .current").animate({opacity: "0"}, 500, function(){
			$("#info-slides .current").removeClass("current").css("display", "none");
			$("#info-slides .step-twoo").css("display", "block").animate({opacity: "1"}, 500).addClass("current");
		});
	});

	$("li.step-3").click(function(){
		$("#info-slides .current").animate({opacity: "0"}, 500, function(){
			$("#info-slides .current").removeClass("current").css("display", "none");
			$("#info-slides .step-three").css("display", "block").animate({opacity: "1"}, 500).addClass("current");
		});
	});

	$("li.step-4").click(function(){
		$("#info-slides .current").animate({opacity: "0"}, 500, function(){
			$("#info-slides .current").removeClass("current").css("display", "none");
			$("#info-slides .step-four").css("display", "block").animate({opacity: "1"}, 500).addClass("current");
		});
	});
});

//FILTER PORTFÓLIO
$(document).ready(init);

function init() {
	var things = $('#case');
	var filters = {};
	
	things.isotope({
		itemSelector : '.thing'
	});
	
	$('.filter a[data-filter-value=""]').addClass('focus');

	$('.filter a').click(
		function(e){
			e.preventDefault();
			var clicked_filter = $(this);

			if ( clicked_filter.hasClass('focus') ) {
				return;
			}
			var optionSet = clicked_filter.parents('.option-set');

			optionSet.find('.focus').removeClass('focus');
			clicked_filter.addClass('focus');

			var group = optionSet.attr('data-filter-group');
			filters[ group ] = clicked_filter.attr('data-filter-value');

			var filters_to_use = [];
			for ( var group in filters ) {
				filters_to_use.push( filters[ group ] )
			}

			var selector = filters_to_use.join('');

			things.isotope({ filter: selector });
		}
	);
}