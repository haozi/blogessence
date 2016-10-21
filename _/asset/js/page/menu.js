define(function(require, exports){
	var $ = require('jquery'),
		tab = require('../plugin/tab');
	var currentBook = undefined;
	function Menu(param){
		var cfg = {},
			defaults = {
				container : '.tab-content'
			};
		$.extend(cfg, defaults, param)
		return new Menu.prototype.init(cfg);
	};
	Menu.prototype = {
		init : function(cfg){
			$(cfg.container).append(this._parseDom());
			this._listerner();
			return this;
		},
		setActive:function(bookId){
			var active = $('.tab-content li.active');
			if(active.length){
				active.toggleClass('active');
				//active.parent().hide();
			}
			var par = $('a[data="'+bookId+'"]').parent().toggleClass('active').parent();
			if(!par.hasClass('active')){
				//alert(1);
				//par.prev().click();
			}
		},
		_parseDom : function(){
			var dom =
			'<div class="tab-pane active j-tabContainer" id="category">'+
			  '<div class="j-menuToggle-box">'+
					'<ul class="j-menuToggle">'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=1">'+
								'<div class="j-step1-inner">博客文集系列 （29）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=001&tabId=1" data="001" class="j-step2" >001 文集之一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=002&tabId=1" data="002" class="j-step2" >002 文集之二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=003&tabId=1" data="003" class="j-step2" >003 文集之三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=004&tabId=1" data="004" class="j-step2" >004 文集之四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=005&tabId=1" data="005" class="j-step2" >005 文集之五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=006&tabId=1" data="006" class="j-step2" >006 文集之六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=015&tabId=1" data="015" class="j-step2" >015 文集之七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=016&tabId=1" data="016" class="j-step2" >016 文集之八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=017&tabId=1" data="017" class="j-step2" >017 文集之九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=018&tabId=1" data="018" class="j-step2" >018 文集之十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=019&tabId=1" data="019" class="j-step2" >019 文集之十一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=068&tabId=1" data="068" class="j-step2" >068 文集之十二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=069&tabId=1" data="069" class="j-step2" >069 文集之十三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=070&tabId=1" data="070" class="j-step2" >070 文集之十四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=071&tabId=1" data="071" class="j-step2" >071 文集之十五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=072&tabId=1" data="072" class="j-step2" >072 文集之十六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=073&tabId=1" data="073" class="j-step2" >073 文集之十七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=074&tabId=1" data="074" class="j-step2" >074 文集之十八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=075&tabId=1" data="075" class="j-step2" >075 文集之十九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=091&tabId=1" data="091" class="j-step2" >091 文集之二十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=092&tabId=1" data="092" class="j-step2" >092 文集之二一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=093&tabId=1" data="093" class="j-step2" >093 文集之二二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=094&tabId=1" data="094" class="j-step2" >094 文集之二三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=095&tabId=1" data="095" class="j-step2" >095 文集之二四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=096&tabId=1" data="096" class="j-step2" >096 文集之二五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=097&tabId=1" data="097" class="j-step2" >097 文集之二六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=098&tabId=1" data="098" class="j-step2" >098 文集之二七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=099&tabId=1" data="099" class="j-step2" >099 文集之二八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=100&tabId=1" data="100" class="j-step2" >100 文集之二九</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=2">'+
								'<div class="j-step1-inner">博客留言系列 （24）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=008&tabId=1" data="008" class="j-step2" >008 留言之一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=009&tabId=1" data="009" class="j-step2" >009 留言之二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=010&tabId=1" data="010" class="j-step2" >010 留言之三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=011&tabId=1" data="011" class="j-step2" >011 留言之四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=012&tabId=1" data="012" class="j-step2" >012 留言之五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=013&tabId=1" data="013" class="j-step2" >013 留言之六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=014&tabId=1" data="014" class="j-step2" >014 留言之七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=022&tabId=1" data="022" class="j-step2" >022 留言之八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=023&tabId=1" data="023" class="j-step2" >023 留言之九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=024&tabId=1" data="024" class="j-step2" >024 留言之十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=025&tabId=1" data="025" class="j-step2" >025 留言之十一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=026&tabId=1" data="026" class="j-step2" >026 留言之十二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=027&tabId=1" data="027" class="j-step2" >027 留言之十三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=028&tabId=1" data="028" class="j-step2" >028 留言之十四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=058&tabId=1" data="058" class="j-step2" >058 留言之十五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=059&tabId=1" data="059" class="j-step2" >059 留言之十六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=060&tabId=1" data="060" class="j-step2" >060 留言之十七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=061&tabId=1" data="061" class="j-step2" >061 留言之十八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=062&tabId=1" data="062" class="j-step2" >062 留言之十九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=063&tabId=1" data="063" class="j-step2" >063 留言之二十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=064&tabId=1" data="064" class="j-step2" >064 留言之二一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=065&tabId=1" data="065" class="j-step2" >065 留言之二二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=066&tabId=1" data="066" class="j-step2" >066 留言之二三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=067&tabId=1" data="067" class="j-step2" >067 留言之二四</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=4">'+
								'<div class="j-step1-inner">龙泉日记 （25）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=029&tabId=1" data="029" class="j-step2" >029 日记之一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=030&tabId=1" data="030" class="j-step2" >030 日记之二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=031&tabId=1" data="031" class="j-step2" >031 日记之三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=032&tabId=1" data="032" class="j-step2" >032 日记之四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=033&tabId=1" data="033" class="j-step2" >033 日记之五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=034&tabId=1" data="034" class="j-step2" >034 日记之六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=035&tabId=1" data="035" class="j-step2" >035 日记之七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=036&tabId=1" data="036" class="j-step2" >036 日记之八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=045&tabId=1" data="045" class="j-step2" >045 日记之九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=046&tabId=1" data="046" class="j-step2" >046 日记之十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=047&tabId=1" data="047" class="j-step2" >047 日记之十一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=048&tabId=1" data="048" class="j-step2" >048 日记之十二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=049&tabId=1" data="049" class="j-step2" >049 日记之十三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=050&tabId=1" data="050" class="j-step2" >050 日记之十四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=051&tabId=1" data="051" class="j-step2" >051 日记之十五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=052&tabId=1" data="052" class="j-step2" >052 日记之十六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=082&tabId=1" data="082" class="j-step2" >082 日记之十七</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=083&tabId=1" data="083" class="j-step2" >083 日记之十八</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=084&tabId=1" data="084" class="j-step2" >084 日记之十九</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=085&tabId=1" data="085" class="j-step2" >085 日记之二十</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=086&tabId=1" data="086" class="j-step2" >086 日记之二一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=087&tabId=1" data="087" class="j-step2" >087 日记之二二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=088&tabId=1" data="088" class="j-step2" >088 日记之二三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=089&tabId=1" data="089" class="j-step2" >089 日记之二四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=090&tabId=1" data="090" class="j-step2" >090 日记之二五</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=3">'+
								'<div class="j-step1-inner">侍师日记 （7）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=007&tabId=1" data="007" class="j-step2" >007 侍师日记专辑之一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=020&tabId=1" data="020" class="j-step2" >020 侍师日记专辑之二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=021&tabId=1" data="021" class="j-step2" >021 侍师日记专辑之三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=040&tabId=1" data="040" class="j-step2" >040 侍师日记专辑之四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=041&tabId=1" data="041" class="j-step2" >041 侍师日记专辑之五</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=042&tabId=1" data="042" class="j-step2" >042 侍师日记专辑之六</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=078&tabId=1" data="078" class="j-step2" >078 侍师日记专辑之七</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=5">'+
								'<div class="j-step1-inner">慈善专辑 （5）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=053&tabId=1" data="053" class="j-step2" >053 慈善专辑之一</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=054&tabId=1" data="054" class="j-step2" >054 慈善专辑之二</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=055&tabId=1" data="055" class="j-step2" >055 慈善专辑之三</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=056&tabId=1" data="056" class="j-step2" >056 慈善专辑之四</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=057&tabId=1" data="057" class="j-step2" >057 慈善专辑之五</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#coverListId=6">'+
								'<div class="j-step1-inner">其它专辑 （10）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=037&tabId=1" data="037" class="j-step2" >037 生命回顾专辑</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=038&tabId=1" data="038" class="j-step2" >038 世界佛教论坛专辑（上）</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=039&tabId=1" data="039" class="j-step2" >039 世界佛教论坛专辑（下）</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=043&tabId=1" data="043" class="j-step2" >043 戒会专辑</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=044&tabId=1" data="044" class="j-step2" >044 法门盛事专辑</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=076&tabId=1" data="076" class="j-step2" >076 法鼓山参学专辑（上）</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=077&tabId=1" data="077" class="j-step2" >077 法鼓山参学专辑（下）</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=079&tabId=1" data="079" class="j-step2" >079 法门之光专辑</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=080&tabId=1" data="080" class="j-step2" >080 比丘西行记</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=081&tabId=1" data="081" class="j-step2" >081 承天寺受戒之旅专辑</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			  '</div>'
			return dom;
		},
		_listerner:function(){
			
		}
	}
	Menu.prototype.init.prototype = Menu.prototype;

	exports.init = Menu;
});