webpackJsonp([14],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-22 09:28:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 10:02:45
*/


var _mm = __webpack_require__(0);
var _user = {
    // 用户登录
    login : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/login.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/check_valid.do'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/register.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户密码提示问题
    getQuestion : function(username, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_get_question.do'),
            data    : {
                username : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查密码提示问题答案
    checkAnswer : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_check_answer.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 重置密码
    resetPassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/update_information.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _user;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-04 21:21:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-04 21:21:26
*/


__webpack_require__(19);

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-03 18:07:56
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 11:07:42
*/


__webpack_require__(77);
__webpack_require__(18);
var _mm 	= __webpack_require__(0);
var _user 	= __webpack_require__(1);

var formError = {
	show : function(errMsg) {
		$('.error-item').show().find('.err-msg').text(errMsg); 
	},
	hide : function() {
		$('.error-item').hide().find('.error-msg').text(''); 
	}
};

var page = {
	init 		: function(){
		this.bindEvent();
	},
	bindEvent 	: function() {
		var _this = this;
		$('#submit').click(function() {
			_this.submit();
		});
		$('.user-content').keyup(function(e) {
			if( e.keyCode === 13 ){
				_this.submit();
			}
		});
	},
	submit 		: function() {
		var formData = {
				username : $.trim($('#username').val()),
				password : $.trim($('#password').val())
			},
			validateResult = this.formValidate(formData);
		if(validateResult.status){
			_user.login(
				formData, 
				function(res){
	                window.location.href = _mm.getUrlParam('redirect') || './index.html';
	            }, 
	            function(errMsg){
	                formError.show(errMsg);
	            }
            );
		}
		else{
			formError.show(validateResult.msg);
		}
	},
	formValidate : function(formData) {
		var result = {
			status 	: false,
			msg 	: ''
		}
		if(!_mm.valiData(formData.username,'require')){
			result.msg = '用户名不能为空';
			return result;
		}
		if(!_mm.valiData(formData.password,'require')){
			result.msg = '密码不能为空';
			return result;
		}
		result.status 	= true;
		result.msg 		= '验证通过';
		return result;
	}
};

$(function() {
	page.init();
});

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[76]);