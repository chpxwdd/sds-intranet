!function(){"use strict";var e,o,t=(e=jQuery,{init:function(){e('input[id="toursearch-dates"]').daterangepicker(n.default.daterangepicker).on("apply.daterangepicker",function(t,a){var n=a.startDate.format("MM.DD.YYYY")+" - "+a.endDate.format("MM.DD.YYYY");e(this).val(n)}).on("cancel.daterangepicker",function(t,a){e(this).val("")}),a.init("input[id=toursearch-rooms]"),a.init("input[id=toursearch-adult]"),e("input[id=toursearch-adult]").prev("div").children("button").on("click",function(){console.log("change adults dec")}),e("input[id=toursearch-adult]").next("div").children("button").on("click",function(){console.log("change adults inc")}),e(".sds-js-toursearch-form").submit(function(t){return!1})}}),a=(o=jQuery,{init:function(){if(!o(".sds-ui-counter"))return!1;o.each(o("input.sds-ui-counter"),function(t,a){var n="";!o(a).data("bs-size")||"sm"!=o(a).data("bs-size")&&"lg"!=o(a).data("bs-size")||(n=o(a).data("bs-size"));var e=parseInt(o(a).val()),s=parseInt(o(a).data("max")),i=parseInt(o(a).data("min")),r=parseInt(o(a).data("step"));o(a).parent().append(o("<div/>",{class:"sds-ui-widget-counter input-group".concat(n?" input-group-".concat(n):"")}).append(o("<div/>",{class:"input-group-prepend"}).append(o("<button/>",{type:"button",class:"decrement btn btn-primary".concat(n?" btn-".concat(n):""),disabled:e-r<i}).append(o("<i/>",{class:"fa fa-".concat("minus")})))).append(a).append(o("<div/>",{class:"input-group-append"}).append(o("<button/>",{type:"button",class:"increment btn btn-primary".concat(n?" btn-".concat(n):""),disabled:s<e+r}).append(o("<i/>",{class:"fa fa-".concat("plus")}))))),o(a).prop("readonly",!0),o(a).addClass("text-center"),n&&o(a).addClass("form-control-".concat(n))}),o("button").on("click",function(){var t=o(this).closest(".sds-ui-widget-counter"),a=t.find("input.sds-ui-counter"),n=t.find("button.increment"),e=t.find("button.decrement"),s=parseInt(o(a).val()),i=parseInt(o(a).data("max")),r=parseInt(o(a).data("min")),d=parseInt(o(a).data("step"));o(this).hasClass("increment")&&o(a).val(s+d),o(this).hasClass("decrement")&&o(a).val(s-d),s=parseInt(o(a).val()),o(n).prop("disabled",i<s+d),o(e).prop("disabled",s-d<r)})}}),n=(jQuery,{default:{counter:{min:0,max:5,step:1,value:1,bsSize:"sm"},daterangepicker:{autoUpdateInput:!0,showDropdowns:!0,alwaysShowCalendars:!0,minDate:moment(),startDate:moment().add(7,"days"),endDate:moment().add(14,"days"),opens:"left",drops:"up",locale:{format:"DD.MM.YYYY",separator:" - ",applyLabel:"Применить",cancelLabel:"Сбросить",fromLabel:"От",toLabel:"До",customRangeLabel:"Custom",weekLabel:"Нед.",daysOfWeek:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],monthNames:["Январь","Февраль","Март","Апель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],firstDay:1}}}});jQuery(document).ready(function(){t.init()})}();