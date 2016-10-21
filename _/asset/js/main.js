define(function(require, exports, module){
	'use strict';
	var $ = require('jquery'),
		hash  = require('./plugin/hash');


	require('./page/layout').init();
	var menu = require('./page/menu').init();
	var articleMenu = require('./page/article').init();

	var menuToggle = require('./plugin/menuToggle'),
		categoryToggle = menuToggle.init({
			container:'#category'
		}),
		articleToggle = menuToggle.init({
			container:'#article'
		});

	var slide = require('./plugin/slide').slide;




	require('./plugin/tab').init({
		el:'#sidebar'
	});
	(function(){
		var oldHash;
		setTimeout(function hashC(){
			if(document.location.hash !== oldHash){
				hashChangeCallback.call(this,hash.get());
				oldHash = document.location.hash;
			}
			setTimeout(hashC,50);
		},0);
	})();

	window.document.onkeyup = function(event){
		var tabId = hash.get('tabId');

		if(event.keyCode == 37){
			if(!$(".j-prev").is(':hidden')){
				hash.set('tabId', --tabId);
			}
		}else if (event.keyCode == 39){
			if(!$(".j-next").is(':hidden')){
				hash.set('tabId', ++tabId);
			}
		}
	}

	var home = require('./page/home');
	var coverList =  require('./page/coverList');
	var articleList = require('./page/articleList');
	function hashChangeCallback(hash){
		if(!hash.bookId && !hash.coverListId && !hash.articleListId){//home
			home.init({
				container:'.main_wrap'
			});
			categoryToggle.close();
			articleToggle.close();
		}else if(hash.bookId){//slide
			categoryToggle.reload({
				bookId : hash.bookId,
				tabId : hash.tabId
			});
			slide.reload(hash);
			menu.setActive(hash.bookId);
			$("html,body").animate({scrollTop:100},100);
		}else if(hash.coverListId){
			coverList.init({
				coverListId:hash.coverListId
			});
		}else if(hash.articleListId){
			articleList.init({
				articleListId:hash.articleListId
			});
		}
	}


});