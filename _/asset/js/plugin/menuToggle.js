define(function(require, exports){
	var $    = require('jquery'),
		hash = require('./hash');

	function MenuToggle(param){
		var cfg = {},
			defaults = {
				container:null,
				bookId:null,
				tabId:null
			};
		$.extend(cfg, defaults, param);
		return new MenuToggle.prototype.init(cfg);
	}
	MenuToggle.prototype = {
		init : function(cfg){
			var me = this;
			me.$menuToggle = $(cfg.container).find('.j-menuToggle');
			me._step1Handeler()._step2Handeler();
			return me;
		},
		reload:function(param){
			var me = this;
			var _hash = hash.stringify(param);
			var $node = me.$menuToggle.find('[href="#' +_hash+ '"]').eq(0);
			$node.trigger('click');
			return me;
		},
		close:function(){
			this.$menuToggle.find('ul').hide();
			return this;
		},
		_step1Handeler:function(){
			var me = this;
			me.$menuToggle.find('.j-step1').on('click',function(){
				var $this = $(this),
					$otherUl = $this.parent().siblings().find('ul'),
					$otherStep1 = $this.parent().siblings().find('.j-step1'),
					$childUl = $this.parent().find('ul');
				if(!$this.hasClass('active')){
	            	$otherUl.hide();
	            	$otherStep1.removeClass('active');

	            	$childUl.show();
	            	$this.addClass('active')

	            	$("html,body").animate({scrollTop:$this.height()},500);
	            }
			});
			return me;
		},
		_step2Handeler:function(){
			var me = this,
				$allUl = me.$menuToggle.find('ul');
			me.$menuToggle.find('.j-step2').on('click',  function(){
				var $this = $(this),
					$allLi = $this.parents('ul').find('.j-step2').parent('li');
				$allUl.hide() && $this.parents('ul').show();
				$allLi.removeClass('active') && $this.parent('li').addClass('active');
			});

			return me;
		}
	};
	MenuToggle.prototype.init.prototype = MenuToggle.prototype;

	exports.init = MenuToggle;
});