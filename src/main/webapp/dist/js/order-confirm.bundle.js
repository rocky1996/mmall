webpackJsonp([2],{

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

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-30 21:39:24
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 12:32:33
*/

var _mm = __webpack_require__(0);
var _order = {
    getProductList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/get_order_cart_product.do'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    creatOrder : function(orderInfo,resolve, reject) {
    	_mm.request({
            url     : _mm.getServerUrl('/order/create.do'),
            data 	: orderInfo,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    getOrderList :function (listParam,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/order/list.do'),
            data    : listParam,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    getOrderDetail :function (orderNumber,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/order/detail.do'),
            data    : {
                orderNo : orderNumber
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    cancelOrder:function (orderNumber,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/order/cancel.do'),
            data    : {
                orderNo : orderNumber
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _order;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-29 15:36:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 12:33:14
*/

var _mm = __webpack_require__(0);
var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            method  : 'GET',
            error   : reject
        });
    },
    // 添加到购物车
    addToCart : function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/add.do'),
            data    : productInfo,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 获取购物车列表
    getCartList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/list.do'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 选择购物车商品
    selectProduct : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/select.do'),
            data    : {
                productId : productId
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 取消选择购物车商品
    unselectProduct : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/un_select.do'),
            data    : {
                productId : productId
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 选中全部商品
    selectAllProduct : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/select_all.do'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 取消选中全部商品
    unselectAllProduct : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/un_select_all.do'),
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 更新购物车商品数量
    updateProduct : function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/update.do'),
            data    : productInfo,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    // 删除指定商品
    deleteProduct : function(productIds, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/delete_product.do'),
            data    : {
                productIds : productIds
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
}
module.exports = _cart;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-31 09:57:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 12:33:31
*/

var _mm = __webpack_require__(0);
var _address = {
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data 	: {
            	pageSize : 50
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    save :function(addressInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    update :function(addressInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/shipping/update.do'),
            data    : addressInfo,
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    deleteAddress :function (shippingId,resolve,reject) {
        _mm.request({
            url     : _mm.getServerUrl('/shipping/del.do'),
            data    : {
                shippingId : shippingId
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    },
    getAddress :function(shippingId,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId: shippingId
            },
            method  : 'GET',
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _address;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-23 20:28:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 20:29:43
*/

__webpack_require__(5);
var _mm     = __webpack_require__(0);
// 通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // 输入会车后，做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword,正常跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        // 如果keyword为空，直接返回首页
        else{
            _mm.goHome();
        }
    }
};

header.init();

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-04 21:54:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 22:06:23
*/


__webpack_require__(7);
var _mm     = __webpack_require__(0);
var _user   = __webpack_require__(1);
var _cart   = __webpack_require__(3);
// 导航
var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            // do nothing
        });
    },
    // 加载购物车数量
    loadCartCount : function(){
        _cart.getCartCount(function(res){
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg){
            $('.nav .cart-count').text(0);
        });
    }
};

module.exports = nav.init();

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-30 21:34:42
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 14:28:49
*/

__webpack_require__(91);
__webpack_require__(4);
__webpack_require__(6);
var _mm             	= __webpack_require__(0);
var _order          	= __webpack_require__(22);
var _address            = __webpack_require__(36);
var addressModal        = __webpack_require__(92);
var templateProduct   	= __webpack_require__(95);
var templateAddress   	= __webpack_require__(96);

var page = {
    data : {
    	selectedAddressId : null
    },
    init : function() {
    	this.onload();
    	this.bindEvent();
    },
    onload : function() {
    	this.loadAddressList();
    	this.loadProductList();
    },
    bindEvent : function() {
    	var _this = this;
    	$(document).on('click', '.address-item', function(){
    		$(this).addClass('active').siblings('.address-item').removeClass('active');
    		_this.data.selectedAddressId = $(this).data('id');
    	});
    	$(document).on('click', '.order-submit', function(){
    		var shippingId = _this.data.selectedAddressId;
    		if(shippingId){
    			_order.creatOrder({
    				shippingId : shippingId
    			},function(res) {
    				window.location.href='./payment.html?orderNumber='+res.orderNo;
    			},function(errMsg) {
    				_mm.errorTips(errMsg);
    			});
    		}
    		else{
    			_mm.errorTips('请选择地址后提交');
    		}
    	});
        $(document).on('click', '.address-add', function(){
            addressModal.show({
                isUpdate : false,
                onSuccess : function () {
                    _this.loadAddressList();
                }
            });
        });
        $(document).on('click', '.address-update', function(e){
            e.stopPropagation();
            var shippingId = $(this).parents('.address-item').data('id');
            _address.getAddress(shippingId,function(res) {
                addressModal.show({
                    isUpdate : true,
                    data: res,
                    onSuccess : function () {
                        _this.loadAddressList();
                    }
                });
            },function(errMsg) {
                _mm.errorTips(errMsg);
            })
        });
        $(document).on('click', '.address-delete', function(e){
            e.stopPropagation();
            var id = $(this).parents('.address-item').data('id');
            if(window.confirm('确认删除？')){
                _address.deleteAddress(id,function () {
                    _this.loadAddressList();
                },function (errMsg) {
                    _mm.errorTips(errMsg);
                })
            }
        });
    },
    loadAddressList : function() {
    	var _this = this;
        $('.address-con').html('<div class="loading"></div>');
    	_address.getAddressList(function(res) {
            _this.addressFilter(res);
    		var addressListHtml = _mm.renderHtml(templateAddress,res);
    		$('.address-con').html(addressListHtml);
    	},function(errMsg) {
			$('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试！</p>');
    	})
    },
    addressFilter : function (data) {
        if(this.data.selectedAddressId){
            var selectedAddressIdFlag=false;
            for(var i=0,length=data.list.length;i<length;i++){
                if(data.list[i].id === this.data.selectedAddressId){
                    data.list[i].isActive = true;
                    selectedAddressIdFlag = true;
                }
            }
            if(!selectedAddressIdFlag){
                this.data.selectedAddressId = null;
            }
        }
    },
    loadProductList : function() {
    	var _this = this;
        $('.product-con').html('<div class="loading"></div>');
    	_order.getProductList(function(res) {
    		var productListHtml = _mm.renderHtml(templateProduct,res);
    		$('.product-con').html(productListHtml);
    	},function(errMsg) {
			$('.product-con').html('<p class="err-tip">商品信息加载失败，请刷新后重试！</p>');
    	})
    }
}
$(function(){
    page.init();
})

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-09-01 08:42:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 14:02:37
*/

var _mm             		= __webpack_require__(0);
var _cities          		= __webpack_require__(93);
var _address          		= __webpack_require__(36);
var templateAddressModal   	= __webpack_require__(94);

var addressModal = {
	show: function(option) {
		this.option 		= option;
		this.option.data 	= option.data || {};
		this.$modalWrap 	= $('.modal-wrap');
		this.loadModal();
		this.bindEvent();
	},
	hide:function() {
		this.$modalWrap.empty();
	},
	loadModal:function() {
		var addressModalHtml=_mm.renderHtml(templateAddressModal,{
			isUpdate 	: this.option.isUpdate,
			data 		: this.option.data
		});
		this.$modalWrap.html(addressModalHtml);
		this.loadProvince();
	},
	loadProvince:function() {
		var provinces = _cities.getProvinces()||[];
		var $provinceSelect = this.$modalWrap.find('#receiver-province');
		$provinceSelect.html(this.getSelectOption(provinces));
		if(this.option.isUpdate&&this.option.data.receiverProvince){
			$provinceSelect.val(this.option.data.receiverProvince);
			this.loadCities(this.option.data.receiverProvince);
		}
	},
	loadCities:function(provinceName) {
		var cities = _cities.getCities(provinceName) || [];
		var $citySelect = this.$modalWrap.find('#receiver-city');
		$citySelect.html(this.getSelectOption(cities));
		if(this.option.isUpdate&&this.option.data.receiverCity){
			$citySelect.val(this.option.data.receiverCity);
		}
	},
	getReceiverInfo:function () {
		var receiverInfo = {};
		var result = {
			status : false
		};
		receiverInfo.receiverName 		= $.trim(this.$modalWrap.find('#receiver-name').val());
		receiverInfo.receiverProvince 	= this.$modalWrap.find('#receiver-province').val();
		receiverInfo.receiverCity 		= this.$modalWrap.find('#receiver-city').val();
		receiverInfo.receiverPhone 		= $.trim(this.$modalWrap.find('#receiver-phone').val());
		receiverInfo.receiverAddress 	= $.trim(this.$modalWrap.find('#receiver-address').val());
		receiverInfo.receiverZip 		= $.trim(this.$modalWrap.find('#receiver-zip').val());

		if(this.option.isUpdate){
			receiverInfo.id 	= this.$modalWrap.find('#receiver-id').val();
		}
		if(!receiverInfo.receiverName){
			result.errMsg = '请输入收件人姓名';
		}
		else if(!receiverInfo.receiverProvince){
			result.errMsg = '请输入收件人省份';
		}
		else if(!receiverInfo.receiverCity){
			result.errMsg = '请输入收件人城市';
		}
		else if(!receiverInfo.receiverPhone){
			result.errMsg = '请输入收件人电话';
		}
		else if(!receiverInfo.receiverAddress){
			result.errMsg = '请输入收件人地址';
		}
		else{
			result.status = true;
			result.data = receiverInfo;
		}
		return result;
	},
	getSelectOption:function (optionArray) {
		var html = '<option value="">请选择</option>'
		for(var i=0,length=optionArray.length;i<length;i++){
			html += '<option value="'+ optionArray[i] +'">'+ optionArray[i] +'</option>'
		}
		return html;
	},
	bindEvent:function() {
		var _this=this;
		this.$modalWrap.find('#receiver-province').change(function() {
			var selectedProvince = $(this).val();
			_this.loadCities(selectedProvince);
		});
		this.$modalWrap.find('.address-btn').click(function() {
			var receiverInfo 	= _this.getReceiverInfo();
			var isUpdate 		= _this.option.isUpdate;
			if(!isUpdate && receiverInfo.status){
				_address.save(receiverInfo.data,function(res) {
					_mm.successTips('success');
					_this.hide();
					typeof _this.option.onSuccess === 'function' &&_this.option.onSuccess(res);
				},function(errMsg) {
					_mm.errorTips(errMsg);
				});
			}
			else if(isUpdate && receiverInfo.status){
				_address.update(receiverInfo.data,function(res) {
					_mm.successTips('修改success');
					_this.hide();
					typeof _this.option.onSuccess === 'function' &&_this.option.onSuccess(res);
				},function(errMsg) {
					_mm.errorTips(errMsg);
				});
			}
			else{
				_mm.errorTips(receiverInfo.errMsg);
			}
		});
		this.$modalWrap.find('.modal-container').click(function(e) {
			e.stopPropagation();
		});
		this.$modalWrap.find('.close').click(function() {
			_this.hide();
		});
	}
}
module.exports = addressModal;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

/*
* @Author: Administrator
* @Date:   2017-09-01 08:56:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 09:11:17
*/
var _cities = {
	cityInfo : {
		'北京':['北京'],
		'上海':['北京'],
		'陕西':['北京'],
		'山西':['北京'],
		'杭州':['杭州1','杭州2']
	},
	getProvinces : function () {
		var provinces = [];
		for(var item in this.cityInfo){
			provinces.push(item);
		}
		return provinces;
	},
	getCities : function (provinceName) {
		return this.cityInfo[provinceName] || [];
	}
}
module.exports = _cities;

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal close\"> <div class=\"modal-container\"> <div class=\"modal-header\"> {{#isUpdate}} <h1 class=\"modal-title\">使用新地址</h1> {{/isUpdate}} {{^isUpdate}} <h1 class=\"modal-title\">使用新地址</h1> {{/isUpdate}} <i class=\"fa fa-close close\"></i> </div> <div class=\"modal-body\"> <div class=\"form\"> <div class=\"form-line\"> <label for=\"receiver-name\" class=\"label\"><span class=\"require\">*</span>收件人:</label> <input type=\"text\" class=\"form-item\" id=\"receiver-name\" placeholder=\"请输入收件人姓名：\" value=\"{{data.receiverName}}\"/> </div> <div class=\"form-line\"> <label for=\"receiver-province\" class=\"label\"><span class=\"require\">*</span>所在城市:</label> <select class=\"form-item\" id=\"receiver-province\"> <option value=\"\">请选择</option> </select> <select class=\"form-item\" id=\"receiver-city\"> <option value=\"\">请选择</option> </select> </div> <div class=\"form-line\"> <label for=\"receiver-address\" class=\"label\"> <span class=\"require\">*</span>详细地址:</label> <input type=\"text\" class=\"form-item\" id=\"receiver-address\" placeholder=\"请精确到门牌号：\" value=\"{{data.receiverAddress}}\"/> </div> <div class=\"form-line\"> <label for=\"receiver-phone\" class=\"label\"> <span class=\"require\">*</span>手机号码:</label> <input type=\"text\" class=\"form-item\" id=\"receiver-phone\" placeholder=\"请输入11位手机号：\" value=\"{{data.receiverPhone}}\"/> </div> <div class=\"form-line\"> <label for=\"receiver-zip\" class=\"label\">邮政编码:</label> <input type=\"text\" class=\"form-item\" id=\"receiver-zip\" placeholder=\"如：100000\" value=\"{{data.receiverZip}}\"/> </div> <div class=\"form-line\"> <input type=\"hidden\" id=\"receiver-id\" value=\"{{data.id}}\"> <a class=\"btn address-btn\">保存收货地址</a> </div> </div> </div> </div> </div>";

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = "<table class=\"product-table\"> <tr> <th class=\"cell-img\">&nbsp;</th> <th class=\"cell-info\">商品描述</th> <th class=\"cell-price\">价格</th> <th class=\"cell-count\">数量</th> <th class=\"cell-total\">小计</th> </tr> {{#orderItemVoList}} <tr> <td class=\"cell-img\"> <a href=\"./detail.html?productId={{productId}}\"> <img src=\"{{imageHost}}{{productImage}}\" class=\"p-img\" alt=\"{{productName}}\"> </a> </td> <td class=\"cell-info\"> <a href=\"./detail.html?productId={{productId}}\" class=\"link\"> {{productName}} </a> </td> <td class=\"cell-price\">￥{{currentUnitPrice}}</td> <td class=\"cell-count\">{{quantity}}</td> <td class=\"cell-total\">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <div class=\"submit-con\"> <span>订单总价:</span> <span class=\"submit-total\">￥{{productTotalPrice}}</span> <span class=\"btn order-submit\">提交订单</span> </div>";

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "{{#list}} {{#isActive}} <div class=\"address-item active\" data-id=\"{{id}}\"> {{/isActive}} {{^isActive}} <div class=\"address-item\" data-id=\"{{id}}\"> {{/isActive}} <div class=\"address-title\"> {{receiverCity}} {{receiverProvince}} ( {{receiverName}} 收) </div> <div class=\"address-detail\"> {{receiverAddress}} {{receiverPhone}} </div> <div class=\"address-opera\"> <span class=\"link address-update\">编辑</span> <span class=\"link address-delete\">删除</span> </div> </div> {{/list}} <div class=\"address-add\"> <div class=\"address-new\"> <i class=\"fa fa-plus\"></i> <div class=\"text\">使用新地址</div> </div> </div></div>";

/***/ })

},[90]);