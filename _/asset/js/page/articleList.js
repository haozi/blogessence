define(function(require, exports){
	var $ = require('jquery'),
		hash = require('../plugin/hash'),
		articlesData = require('../../data/articles/articleList.data'),
		home = require('../page/home');
	function ArticleList(param){
		var cfg = {},
			defaults = {
				container:'.main_wrap'
			};
		$.extend(cfg, defaults, param)
		return new ArticleList.prototype.init(cfg);
	};
	ArticleList.prototype = {
		init : function(cfg){
			var me = this;
			$(cfg.container).html(this._parseDom(cfg.articleListId));
			return me;
		},
		_parseDom : function(articleListId){
			try{
				var dom;
				if(articleListId === "2"){ //alert('问答模块，这里的html结构单独写');
					dom = [
						'<ul class="article-list  article-list-box">',
							(function(){
								var html = '',
									id = articleListId,
									data = articlesData[id];
								for(var i=0;i<data.length; ++i){
									html +=
									'<li>'+
										'<div class="article_message article_des">'+
											'<div class="article_t">'+
												'<a title="' +data[i].title+ '" href="#' +data[i].href+ '"><h3>' +data[i].title+ '</h3></a>'+
												'<span>' +data[i].category+ '</span>'+
											'</div>'+
											'<div class="article-content">' +data[i].summary+ '</div>'+
										'</div>'+
										'<a href="#' +data[i].href+ '"><img src="_/asset/data/articles_pic/' +data[i].imgsrc+ '" ></a>'+

									'</li>'
								}
								return html;
							})(),
						'</ul>',
						'<div class="page_bottom"></div>'
					].join('');
				}else{
					dom = [
						'<ul class="article-list  article-list-box">',
							(function(){
								var html = '',
									id = articleListId,
									data = articlesData[id];
								for(var i=0;i<data.length; ++i){		
									html +=
									'<li>'+
										'<div class="article_des">'+
											'<div class="article_t">'+
												'<a title="' +data[i].title+ '" href="#' +data[i].href+ '"><h3>' +data[i].title+ '</h3></a>'+
												'<span>' +data[i].category+ '</span>'+
											'</div>'+
											'<p>' +data[i].summary+ '</p>'+
										'</div>'+
										'<a href="#' +data[i].href+ '"><img src="_/asset/data/articles_pic/' +data[i].imgsrc+ '" ></a>'+
									'</li>'
								}
								return html;
							})(),
						'</ul>',
						'<div class="page_bottom"></div>'
					].join('');
				}

				return dom;
			}catch(e){
				alert('error：articleListId 为 ' + articleListId + '的数据没有找到！')
			}
		}
	}
	ArticleList.prototype.init.prototype = ArticleList.prototype;

	exports.init = ArticleList;
});