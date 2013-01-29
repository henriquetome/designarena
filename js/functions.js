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

$(document).ready(function(){
    $('a.main-btn').smoothScroll({
        afterScroll: function() {}
    });
});
