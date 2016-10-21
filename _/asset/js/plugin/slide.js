
define(function (require,exports) {

	var $ = require('jquery'),
	    hash = require('./hash'),
		bookData = require('../../data/books/book.data')
		home = require('../page/home');
	var slide ={
		reload:function(param){
			var me = this,
				bookId = param.bookId || 'home',
				tabId = param.tabId || '';
			if(bookId === 'home'){
				home.init({
					container:'.main_wrap'
				});
			}else{
				try{
					me._init(param);
					var $nodeImg = $('.j-list li').eq(tabId-1).find('img'),
						dataSrc  = $nodeImg.data('src');
					$nodeImg.attr('src', dataSrc);
				}catch(e){
					alert('bookId：'+bookId +'没有与之对应的图书')
				}
			}
			return me;
		},
		_init:function(param){
			var me = this;
//			me._cleanDom(); // 需要清理数据
			me._parseDom();
			var $slide = $('.j-slide'),
				$slideIn = $slide.find('.j-slide-in'),
				$list = $slide.find('.j-list'),
				$prev = $slide.find('.j-prev'),
				$next = $slide.find('.j-next'),
				slideWidth = $slide.outerWidth(),
				tabId = param.tabId-0 || 1,
				_sumSlide = function(){
					var sum = 0,
						cfg = bookData[param.bookId].slideConfig;
					for (var i = 0; i < cfg.length; ++i){
						sum += cfg[i];
					}
					return sum;
				}();


            $slideIn.width(_sumSlide*slideWidth);

			function checkSlideInLeft(){
				$list.animate({
					marginLeft:-(tabId-1)*slideWidth
				},250,'swing', function(){
					setActive(param.tabId); // 设置页签
				});

				if(tabId===1){
					$prev.hide();
                    $next.show();
				}else if(tabId===_sumSlide){
                    $prev.show();
					$next.hide();
				}else{
					$prev.show();
					$next.show();
				}
			}
			checkSlideInLeft();

			$slide.on('click','.j-next', function(){
				tabId++;
				hash.set('tabId', tabId);
				return false;
			});
			$slide.on('click','.j-prev', function(){
				tabId--;
				hash.set('tabId', tabId);
				return false;
			});

			function parseListDom(){
				var dom = '',
					cfg = bookData[param.bookId].slideConfig,
					bookId = param.bookId,
					i,
					j;
				for(i=0;i < cfg.length; i++){
					for(j=1;j<=parseInt(cfg[i]);j++){
						dom += '<li><img data-src="_/asset/data/books/' +bookId+ '/' +bookId+ '_' +(i+1)+ formatName(j)+ '.jpg"></li>'
					};
				}
				return dom;
			};
			function formatName(n){
				if(n < 10){
					return '0'+n;
				}
				return n;
			}
			function setActive(tabId){

				var src = $('.j-list').find('li').eq(tabId - 1).find('img').attr('src');
				if(src){
					var start = src.lastIndexOf('/') + 1;
					var end = src.indexOf('.');
					var src_name = src.substr(start, end - start);
					var bb = src_name.split('_')[1][0];

					$('.j-slide-tab').find('li').eq(bb-1).addClass('active');
				}
			}

			function parseTabDom(){
				var dom = '',
					cfg =  bookData[param.bookId].slideConfig
					bookId = param.bookId;
				function sumArr(l){
					var n=0;
					var len = l - 1;
					for(var i=0; i<len;i++){
						n += parseInt(cfg[i]);
					}
					return n + 1;

				}
				dom += '<li class="color_1"><a href="#bookId=' +bookId+ '&amp;tabId=' +(sumArr(1))+ '">封面</a></li>'
				dom += '<li class="color_2"><a href="#bookId=' +bookId+ '&amp;tabId=' +(sumArr(2))+ '">样章</a></li>'
				dom += '<li class="color_3"><a href="#bookId=' +bookId+ '&amp;tabId=' +(sumArr(3))+ '">导言</a></li>'
				dom += '<li class="color_4"><a href="#bookId=' +bookId+ '&amp;tabId=' +(sumArr(4))+ '">目录</a></li>'
				dom += '<li class="color_5"><a href="#bookId=' +bookId+ '&amp;tabId=' +(sumArr(5)) +'">精选</a></li>'
				return dom;
			};
			$list.html(parseListDom());
			$('.j-slide-tab').html(parseTabDom());

			me._slideTabHandle();
			return me;
		},
		_parseDom:function(){
			if($('.j-slide').length >0){
				return
			};
			var dom =
				'<ul class="nav-tabs-color j-slide-tab" >'+

				'</ul>'+
				'<div class="j-slide">'+
					'<div class="j-slide-in">'+
						'<ul class="j-list">'+

						'</ul>'+
					'</div>'+
					'<a class="j-prev" href="javascript:"></a>'+
					'<a class="j-next" href="javascript:"></a>'+
				'</div>'+
				'<div class="page_bottom"></div>'
			$('.main_wrap').html(dom);

		},
		_cleanDom:function(){
			$('.main_wrap').html('');
		},
		_goto:function(n){

		},
		_slideTabHandle:function(){
			var sHash = hash.stringify(hash.get());
			$('.j-slide-tab > li').on('click', function(){
				// $(this).addClass('active').siblings().removeClass('active');
				// $('[href="#' +sHash+'"]').parent().addClass('active')
			})
		}
	}

	exports.slide = slide;
});