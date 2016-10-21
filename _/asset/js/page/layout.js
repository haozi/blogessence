define(function(require, exports){
	var $ = require('jquery');
	function Layout(param){
		var cfg = {},
			defaults = {
				container : 'body'
			};
		$.extend(cfg, defaults, param)
		return new Layout.prototype.init(cfg);
	};
	Layout.prototype = {
		init : function(cfg){
			$(cfg.container).html(this._parseDom());
			return this;
		},
		_parseDom : function(){
			var dom =
				'<div class="container">'+
					'<div class="header">'+
						'<a href="#home"><img src="_/asset/image/logo.png" alt="首页"></a>'+
					'</div>'+
					'<div class="main" >'+
						'<div class="slide" id="sidebar">'+
							'<ul class="nav nav-tabs" id="myTab1">'+
								'<li class="active j-tabNav"><a href="#category">书籍目录</a></li>'+
								'<li class="j-tabNav"><a href="#article">精选文章</a></li>'+
							'</ul>'+
							'<div class="tab-content">'+
							'</div>'+
						'</div>'+
						'<div class="main_wrap">'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="footer">'+
					'<p><a href="http://blog.sina.com.cn/xuecheng" target="_blank">学诚法师博客</a><a href="http://weibo.com/xuecheng" target="_blank">学诚法师新浪微博</a><a href="http://www.longquanzs.org" target="_blank">龙泉之声传统文化网</a></p>'+
					'<p>Copyright &copy; 2013 北京龙泉寺</p>'+
				'</div> '
				// '<div id="back-to-top"><a href="#top"><span></span>返回顶部</a></div>'
			return dom;
		}
	}
	Layout.prototype.init.prototype = Layout.prototype;

	exports.init = Layout;
});