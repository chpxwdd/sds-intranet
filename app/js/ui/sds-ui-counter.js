'use strict';

var sdsUICounter = (function ($) {
	var glyphInc = 'plus';
	var glyphDec = 'minus';
	var defaultValues = {
		bsSize: '',
		max: null,
		min: null,
		step: 1,
		initValue: 0
	};

	return {
		init: function (input) {
			if (!$(input)) return false;

			var _self = this;

			var bsSize = '';
			if (
				$(input).data('bs-size') &&
				($(input).data('bs-size') == 'sm' || $(input).data('bs-size') == 'lg')
			) {
				bsSize = $(input).data('bs-size');
			}

			var value = parseInt($(input).val());
			var max = parseInt($(input).data('max'));
			var min = parseInt($(input).data('min'));
			var step = parseInt($(input).data('step'));
			var parent = $(input).parent();

			parent.append(
				$('<div/>', {
					class: 'sds-ui-widget-counter input-group'.concat(
						bsSize ? ' input-group-'.concat(bsSize) : ''
					)
				})
					.append(
						$('<div/>', { class: 'input-group-prepend' }).append(
							$('<button/>', {
								type: 'button',
								class: 'decrement btn btn-primary'.concat(
									bsSize ? ' btn-'.concat(bsSize) : ''
								),
								disabled: min > value - step
							}).append($('<i/>', { class: 'fa fa-'.concat(glyphDec) }))
						)
					)
					.append(input)
					.append(
						$('<div/>', { class: 'input-group-append' }).append(
							$('<button/>', {
								type: 'button',
								class: 'increment btn btn-primary'.concat(
									bsSize ? ' btn-'.concat(bsSize) : ''
								),
								disabled: max < value + step
							}).append($('<i/>', { class: 'fa fa-'.concat(glyphInc) }))
						)
					)
			);
			$(input).prop('readonly', true);
			$(input).addClass('text-center');
			if (bsSize) {
				$(input).addClass('form-control-'.concat(bsSize));
			}

			$('button').on('click', function () {
				var widget = $(this).closest('.sds-ui-widget-counter'),
					input = widget.find('input.sds-ui-counter'),
					increment = widget.find('button.increment'),
					decrement = widget.find('button.decrement'),
					value = parseInt($(input).val()),
					max = parseInt($(input).data('max')),
					min = parseInt($(input).data('min')),
					step = parseInt($(input).data('step'));
				if ($(this).hasClass('increment')) $(input).val(value + step);
				if ($(this).hasClass('decrement')) $(input).val(value - step);
				value = parseInt($(input).val());
				$(increment).prop('disabled', max < value + step);
				$(decrement).prop('disabled', min > value - step);
			});
		}
	};
})(jQuery);
