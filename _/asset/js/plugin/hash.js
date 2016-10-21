define(function(require, exports){
	var $ = require('jquery');
	var hash = {
		parse : function(hashString){
			if(!hashString){return {}};
			var _arr = hashString.replace(/#/g,'').split('&'),
				_tmp = {},
				_t,
				i,
				l;
			for(i=0,l=_arr.length;i<l;++i){
				var _t = _arr[i].split('=');
				_tmp[_t[0]] = _t[1];
			}
			return _tmp;
		},
		set:function(key,val){
			var _hashArr = this.get();
			_hashArr[key] = val;

			document.location.href = '#' + this.stringify(_hashArr);

		},
		get:function(key){
			var hash = document.location.hash.replace(/#/g,'');
			if(!key){
				return this.parse(hash);
			}
			return this.parse(hash)[key] || null;
		},
		stringify :function(param){
			var s = '';
			$.each(param, function(o,i){
				s+= o + '=' + i +'&';

			});
			s = s.replace(/&$/,'');
			return s;
		}
	}
	return hash;
})