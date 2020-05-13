'use strict';

var global = (function ($) {
	return {
		default: {
			counter: {
				min: 0,
				max: 5,
				step: 1,
				value: 1,
				bsSize: "sm"
			},
			daterangepicker: {
				// autoApply: true,
				autoUpdateInput: true,
				showDropdowns: true,
				alwaysShowCalendars: true,
				minDate: moment(),
				startDate: moment().add(7, 'days'),
				endDate: moment().add(14, 'days'),
				opens: 'left',
				drops: 'up',
				locale: {
					format: 'DD.MM.YYYY',
					separator: ' - ',
					applyLabel: 'Применить',
					cancelLabel: 'Сбросить',
					fromLabel: 'От',
					toLabel: 'До',
					customRangeLabel: 'Custom',
					weekLabel: 'Нед.',
					daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					monthNames: [
						'Январь',
						'Февраль',
						'Март',
						'Апель',
						'Май',
						'Июнь',
						'Июль',
						'Август',
						'Сентябрь',
						'Октябрь',
						'Ноябрь',
						'Декабрь'
					],
					firstDay: 1
				}
			}
		}
	};
})(jQuery);
