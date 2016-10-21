define(function(require, exports){
	var $ = require('jquery'),
		menuToggle = require('../plugin/menuToggle')
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
			// this._listerner();
			return this;
		},
		setActive:function(bookId){
			var active = $('.tab-content li.active');
			if(active.length){
				active.toggleClass('active');
				active.parent().hide();
			}
			$('a[data="'+bookId+'"]').parent().toggleClass('active').parent().show();
		},
		_parseDom : function(){
			var dom =
			'<div class="tab-pane j-tabContainer" id="article" style="display:none">'+
				'<div class="j-menuToggle-box">'+
					'<ul class="j-menuToggle">'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=1">'+
								'<div class="j-step1-inner">博客文集系列 （29）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=001&tabId=23" data="001" class="j-step2" >001 花里胡哨的QQ车</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=002&tabId=19" data="002" class="j-step2" >002 都是手机惹的祸</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=003&tabId=17" data="003" class="j-step2" >003 坐头等舱的大和尚</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=004&tabId=15" data="004" class="j-step2" >004 建立人才培养模式</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=005&tabId=17" data="005" class="j-step2" >005 挖土为哪般？</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=006&tabId=15" data="006" class="j-step2" >006 无相管理</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=015&tabId=15" data="015" class="j-step2" >015 加强国家文化软实力建设</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=016&tabId=15" data="016" class="j-step2" >016 佛教徒面对灾难时的行动</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=017&tabId=15" data="017" class="j-step2" >017 我喜欢吃咸淡相宜的面</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=018&tabId=17" data="018" class="j-step2" >018 看开幕式与修行</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=019&tabId=15" data="019" class="j-step2" >019 龙泉寺的“敬老节”</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=068&tabId=15" data="068" class="j-step2" >068 生命的转折点</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=069&tabId=15" data="069" class="j-step2" >069 世界第九大奇迹</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=070&tabId=15" data="070" class="j-step2" >070 业果愿力缘起不思议（下）</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=071&tabId=15" data="071" class="j-step2" >071 同走菩提路</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=072&tabId=15" data="072" class="j-step2" >072 真理的寻求者</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=073&tabId=15" data="073" class="j-step2" >073 我家广大 种种皆有</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=074&tabId=15" data="074" class="j-step2" >074 依师是个铁门槛</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=075&tabId=13" data="075" class="j-step2" >075 领略华藏世界</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=091&tabId=11" data="091" class="j-step2" >091 分秒必争</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=092&tabId=15" data="092" class="j-step2" >092 新的体会　新的感动　新的收获</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=093&tabId=13" data="093" class="j-step2" >093 五岁菩提路</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=094&tabId=13" data="094" class="j-step2" >094 新文明　心文化　心和谐</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=095&tabId=17" data="095" class="j-step2" >095 心向内缘才有力量</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=096&tabId=13" data="096" class="j-step2" >096 当代佛教社会责任的四个方面</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=097&tabId=17" data="097" class="j-step2" >097 一场来自泰国长老的讲座</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=098&tabId=15" data="098" class="j-step2" >098 因缘殊胜　携手精进</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=099&tabId=17" data="099" class="j-step2" >099 心公益 心慈善</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=100&tabId=15" data="100" class="j-step2" >100 今天我要对您说</a>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=2">'+
								'<div class="j-step1-inner">博客留言系列 （24）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=008&tabId=9" data="008" class="j-step2" >008 菩萨在哪里</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=009&tabId=11" data="009" class="j-step2" >009 放下不容易</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=010&tabId=9" data="010" class="j-step2" >010 生命的大考</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=011&tabId=9" data="011" class="j-step2" >011 在世间</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=012&tabId=9" data="012" class="j-step2" >012 让心定 让气顺</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=013&tabId=9" data="013" class="j-step2" >013 乐观平和 面对疾病</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=014&tabId=9" data="014" class="j-step2" >014 一渊清水</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=022&tabId=7" data="022" class="j-step2" >022 认识生命　从心开始</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=023&tabId=7" data="023" class="j-step2" >023 吃素、戒杀与放生</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=024&tabId=7" data="024" class="j-step2" >024 来自职场的压力</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=025&tabId=9" data="025" class="j-step2" >025 挖掘生命潜力</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=026&tabId=9" data="026" class="j-step2" >026 历事练心践佛法</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=027&tabId=7" data="027" class="j-step2" >027 正住的弟子相</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=028&tabId=7" data="028" class="j-step2" >028 慈心侍父母　善巧报亲恩</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=058&tabId=8" data="058" class="j-step2" >058 慈悲待人　智慧处事</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=059&tabId=9" data="059" class="j-step2" >059 学得快乐　做得实在</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=060&tabId=8" data="060" class="j-step2" >060 事业与道业</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=061&tabId=8" data="061" class="j-step2" >061 放不下又如何</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=062&tabId=8" data="062" class="j-step2" >062 扬起希望的风帆</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=063&tabId=8" data="063" class="j-step2" >063 佛法中有答案</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=064&tabId=8" data="064" class="j-step2" >064 戒是一切德依处</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=065&tabId=8" data="065" class="j-step2" >065 春天播种　秋天收获</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=066&tabId=8" data="066" class="j-step2" >066 出家报恩行大孝</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=067&tabId=8" data="067" class="j-step2" >067 佛菩萨不是护身符</a>'+
								'</li>	'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=3">'+
								'<div class="j-step1-inner">龙泉日记 （25）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=029&tabId=11" data="029" class="j-step2" >029 2006年5月12日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=030&tabId=9" data="030" class="j-step2" >030 2006年6月24日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=031&tabId=11" data="031" class="j-step2" >031 2006年10月23日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=032&tabId=11" data="032" class="j-step2" >032 2007年1月30日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=033&tabId=11" data="033" class="j-step2" >033 2007年4月17日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=034&tabId=11" data="034" class="j-step2" >034 2007年7月3日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=035&tabId=9" data="035" class="j-step2" >035 2007年9月4日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=036&tabId=9" data="036" class="j-step2" >036 2007年10月16日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=045&tabId=9" data="045" class="j-step2" >045 2007年12月15日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=046&tabId=9" data="046" class="j-step2" >046 2008年2月24日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=047&tabId=8" data="047" class="j-step2" >047 2008年4月24日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=048&tabId=8" data="048" class="j-step2" >048 2009年8月15日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=049&tabId=7" data="049" class="j-step2" >049 2009年9月18日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=050&tabId=7" data="050" class="j-step2" >050 2009年10月1日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=051&tabId=7" data="051" class="j-step2" >051 2009年11月8日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=052&tabId=7" data="052" class="j-step2" >052 2009年12月26日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=082&tabId=9" data="082" class="j-step2" >082 2010年2月24日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=083&tabId=9" data="083" class="j-step2" >083 2010年4月3日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=084&tabId=9" data="084" class="j-step2" >084 2010年5月29日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=085&tabId=9" data="085" class="j-step2" >085 2010年7月27日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=086&tabId=9" data="086" class="j-step2" >086 2010年10月29日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=087&tabId=9" data="087" class="j-step2" >087 2010年12月31日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=088&tabId=11" data="088" class="j-step2" >088 2011年2月17日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=089&tabId=10" data="089" class="j-step2" >089 2011年4月5日</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=090&tabId=9" data="090" class="j-step2" >090 2011年6月20日</a>'+
								'</li>	'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=4">'+
								'<div class="j-step1-inner">侍师日记 （7）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=007&tabId=14" data="007" class="j-step2" >007 论坛开幕啦</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=020&tabId=15" data="020" class="j-step2" >020 在两岸佛教文化论坛发言</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=021&tabId=16" data="021" class="j-step2" >021 全球伦理准则</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=040&tabId=12" data="040" class="j-step2" >040 我们需要开阔的眼界和更加精进的努力</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=041&tabId=12" data="041" class="j-step2" >041 以天下为己任</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=042&tabId=12" data="042" class="j-step2" >042 三国佛教讲演会</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=078&tabId=13" data="078" class="j-step2" >078 飞赴武夷</a>'+
								'</li>	'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=5">'+
								'<div class="j-step1-inner">慈善专辑 （5）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=053&tabId=11" data="053" class="j-step2" >053 众善兼备助布施　渐次修学得圆满</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=054&tabId=13" data="054" class="j-step2" >054 小皇帝乐做奉粥郎</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=055&tabId=13" data="055" class="j-step2" >055 大地疮痍　人间无畏</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=056&tabId=13" data="056" class="j-step2" >056 十二岁的天空</a>'+
								'</li>	'+
								'<li>'+
									'<a href="#bookId=057&tabId=15" data="057" class="j-step2" >057 生命的意义和归属</a>'+
								'</li>	'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a class="j-step1" href="#articleListId=6">'+
								'<div class="j-step1-inner">其它专辑 （10）</div>'+
							'</a>'+
							'<ul>'+
								'<li>'+
									'<a href="#bookId=037&tabId=17" data="037" class="j-step2" >037 老吾老以及人之老</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=038&tabId=12" data="038" class="j-step2" >038 佛教进入全新发展阶段</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=039&tabId=14" data="039" class="j-step2" >039 佛教教育的机遇与挑战</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=043&tabId=9" data="043" class="j-step2" >043 戒会第八天：正受沙弥戒</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=044&tabId=15" data="044" class="j-step2" >044 佛指舍利安奉大典</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=076&tabId=14" data="076" class="j-step2" >076 初闻法鼓教育体系</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=077&tabId=16" data="077" class="j-step2" >077 见识台湾佛教的社会化</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=079&tabId=14" data="079" class="j-step2" >079 让生命成长</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=080&tabId=14" data="080" class="j-step2" >080 草堂寺与净业寺</a>'+
								'</li>'+
								'<li>'+
									'<a href="#bookId=081&tabId=14" data="081" class="j-step2" >081 做合格的出家人</a>'+
								'</li>	'+
							'</ul>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			  '</div>'
			return dom;
		}

	}
	Menu.prototype.init.prototype = Menu.prototype;

	exports.init = Menu;
});