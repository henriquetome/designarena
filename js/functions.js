var MENU = {
	sectionsHeight: {},

	init: function () {

		$(function () {

			$("#drop-nav").css("position", "fixed");

			$(window).scroll(function (e) {

				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();
				var menuBox = $("#drop-nav");

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