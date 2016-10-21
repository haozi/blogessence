define(function(require, exports){
	var $ = require('jquery'),
		hash = require('../plugin/hash'),
		coversData = require('../../data/covers/covers.data'),
		home = require('../page/home');
	function Cover(param){
		var cfg = {},
			defaults = {
				container:'.main_wrap'
			};
		$.extend(cfg, defaults, param)
		return new Cover.prototype.init(cfg);
	};
	Cover.prototype = {
		init : function(cfg){
			var me = this;
			$(cfg.container).html(this._parseDom(cfg.coverListId));
			return me;
		},
		_parseDom : function(coverListId){
			var dom =
				[
					'<ul class="cover-list  cover-list-box">',
						(function(){
							var html = '',
								id = coverListId,
								data = coversData[id];
							for(var i=0;i<data.length; ++i){
								html +=
								'<li>'+
									'<a '+
										'href="' + '#bookId=' +data[i].bookId +'&tabId=1" '+
										'title="' +data[i].summary +'" '+
									'>'+
										'<img src="_/asset/data/covers/' + data[i].bookId +'_101.jpg">'+
									'</a>'+
								'</li>'
							}
							return html;
						})(),
					'</ul>',
					'<div class="page_bottom"></div>'
				].join('');
			return dom;
		}
	}
	Cover.prototype.init.prototype = Cover.prototype;

	exports.init = Cover;
});