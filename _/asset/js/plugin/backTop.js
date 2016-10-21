define(function(require, exports){
	var $ = require('jquery');
	function _init(){
		$(document).ready(function(){
	//首先将#back-to-top隐藏 
	$("#back-to-top").hide(); alert("dd");
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(function () {
		$(window).scroll(
	function(){
		if ($(window).scrollTop()>100){
		$("#back-to-top").fadeIn(1500);}
		else{
		$("#back-to-top").fadeOut(1500);}});
	};
		exports.init = _init;
 });

