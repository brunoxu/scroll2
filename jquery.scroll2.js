/*
scroll2 - jQuery plugin for handling scroll event more properly

Copyright 2014 Bruno Xu

Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

Project home:
	http://www.brunoxu.com/scroll2.html

Version: 1.0
*/

(function ($) {
	if (typeof $.fn.scroll2 !== "undefined") {
		return;
	}

	$.extend($.fn, {
		scroll2 : function (func, delay) {
			if ( !func || (typeof func !== 'function') ) {
				return;
			}
			if ( delay && parseInt(delay) ) {
				delay = parseInt(delay);
			}
			if ( !(delay && delay>0) ) {
				delay = $.fn.scroll2.defaults.delay;
			}
			var opts = $.extend($.fn.scroll2.defaults, {func:func,delay:delay});
			var ins;
			this.scroll(function(){clearTimeout(ins);ins=setTimeout(opts.func,opts.delay);});
		}
	});
	$.fn.scroll2.defaults = {
		func: function(){},
		delay: 100
	};
})(jQuery);
