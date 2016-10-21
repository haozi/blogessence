define(function(require, exports){
	var $ = require('jquery');
	function Tab(param){
		var cfg = {},
			defaults = {
				el : null
			};
		$.extend(cfg, defaults, param);


		return new Tab.prototype.init(cfg);
	};
	Tab.prototype = {
		init : function(cfg){
			var me = this;

			me.$el = $(cfg.el);
			me.$tabNav = me.$el.find('.j-tabNav');
			me.$tabContainer = me.$el.find('.j-tabContainer');
			me.listener();
		},
		listener:function(){
			var me = this;
			me.$tabNav.each(function(index){
				$(this).on('click', function(){
					$this = $(this);
					me.$tabNav.removeClass('active') && $this.addClass('active');
					me.$tabContainer.hide();
					me.$tabContainer.eq(index).show();
					return false;
				})
			})
		}
	}
	Tab.prototype.init.prototype = Tab.prototype;

	exports.init = Tab;
});