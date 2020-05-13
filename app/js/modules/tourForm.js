'use strict';

var toursearchForm = (function ($) {
	return {
		init: function () {
			// daterangepicker
			$('input[id="toursearch-dates"]')
				.daterangepicker(global.default.daterangepicker)
				.on('apply.daterangepicker', function (e, picker) {
					var dateFrom = picker.startDate.format('MM.DD.YYYY');
					var dateTo = picker.endDate.format('MM.DD.YYYY');
					var value = dateFrom + ' - ' + dateTo;
					$(this).val(value);
				})
				.on('cancel.daterangepicker', function (e, picker) {
					$(this).val('');
				});

			// rooms

			sdsUICounter.init("input[id=toursearch-rooms]");
			sdsUICounter.init("input[id=toursearch-adult]");
			// $('input[id=toursearch-rooms]')
			// 	.prev('div')
			// 	.children('button')
			// 	.on('click', function () {
			// 		console.log('change rooms dec');
			// 	});
			// $('input[id=toursearch-rooms]')
			// 	.next('div')
			// 	.children('button')
			// 	.on('click', function () {
			// 		console.log('change rooms inc');
			// 	});

			// adults
			$('input[id=toursearch-adult]')
				.prev('div')
				.children('button')
				.on('click', function () {
					console.log('change adults dec');
				});

			$('input[id=toursearch-adult]')
				.next('div')
				.children('button')
				.on('click', function () {
					console.log('change adults inc');
				});

			// validate & submit
			$('.sds-js-toursearch-form').submit(function (form) {
				return false;
			});
		}
	};
})(jQuery);
