define(function(require, exports){
	var $ = require('jquery');
	function _init(){
		$(document).ready(function(){
	//���Ƚ�#back-to-top���� 
	$("#back-to-top").hide(); alert("dd");
//����������λ�ô��ھඥ��100��������ʱ����ת���ӳ��֣�������ʧ
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

