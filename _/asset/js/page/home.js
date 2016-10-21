define(function(require, exports){
	var $ = require('jquery');
	function Home(param){
		var cfg = {},
			defaults = {
				container:'.main_wrap'
			};
		$.extend(cfg, defaults, param)
		return new Home.prototype.init(cfg);
	};
	Home.prototype = {
		init : function(cfg){
			$(cfg.container).html(this._parseDom());
			return this;
		},
		_parseDom : function(){
			var dom =
				'<div class="books_box" >'+
					'<img src="_/asset/image/books.png" >'+
				'</div>'
			return dom;
		}
	}
	Home.prototype.init.prototype = Home.prototype;

	exports.init = Home;
});