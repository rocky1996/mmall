webpackJsonp([4],{

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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-09-01 17:55:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-03 13:13:29
*/


__webpack_require__(101);
__webpack_require__(6);
__webpack_require__(4);
var navSide         = __webpack_require__(12);
var _mm             = __webpack_require__(0);
var _order          = __webpack_require__(22);
var templateIndex   = __webpack_require__(102);

// page 逻辑部分
var page = {
    data:{
        orderNumber : _mm.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        navSide.init({
            name: 'order-detail'
        });
        this.loadDetail();
    },
    bindEvent :function (){
        var _this=this;
        $(document).on('click','.order-cancel',function() {
            if(window.confirm('确认取消？')){
                _order.cancelOrder(_this.data.orderNumber,function(res) {
                    _mm.successTips('取消成功');
                    _this.loadDetail();
                },function(errMsg) {
                    _mm.errorTips(errMsg);
                });
            }
            else{
                return;
            }
        })
    },
    loadDetail:function() {
        var _this=this;
        var orderDetailHtml = '';
        var $content=$('.content');
        $content.html('<div class="loading"><div>');
        _order.getOrderDetail(this.data.orderNumber,function(res) {
            _this.dataFilter(res);
            orderDetailHtml=_mm.renderHtml(templateIndex,res);
            $content.html(orderDetailHtml);
        },function(errMsg) {
            $listCon.html('<p class="err-tips">加载订单失败</p>')
        });
    },
    dataFilter : function (data) {
        data.needPay        = data.status == 10;
        data.isCancelable   = data.status == 10;
    }
};
$(function(){
    page.init();
});

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\"> <div class=\"panel-title\">订单信息</div> <div class=\"panel-body\"> <div class=\"order-info\"> <div class=\"text-line\"> <span class=\"text\">订单号:{{orderNo}}</span> <span class=\"text\">创建时间:{{creatTime}}</span> </div> <div class=\"text-line\"> <span class=\"text\"> 收件人: {{receiverName}} {{shippingVo.receiverProvince}} {{shippingVo.receiverCity}} {{shippingVo.receiverAddress}} {{shippingVo.receiverMobile}} </span> </div> <div class=\"text-line\"> <span class=\"text\">订单状态:{{statusDesc}}</span> </div> <div class=\"text-line\"> <span class=\"text\">支付方式:{{paymentTypeDesc}}</span> </div> <div class=\"text-line\"> {{#needPay}} <a href=\"./payment.html?orderNumber={{orderNo}}\" class=\"btn\">去支付</a> {{/needPay}} {{#isCancelable}} <a class=\"btn order-cancel\">取消订单</a> {{/isCancelable}} </div> </div> </div> </div> <div class=\"panel\"> <div class=\"panel-title\">商品清单</div> <div class=\"panel-body\"> <table class=\"product-table\"> <tr> <th class=\"cell-th cell-img\">&nbsp;</th> <th class=\"cell-th cell-info\">商品信息</th> <th class=\"cell-th cell-price\">单价</th> <th class=\"cell-th cell-count\">数量</th> <th class=\"cell-th cell-total\">小计</th> </tr> {{#orderItemVoList}} <tr> <td class=\"cell cell-img\"> <a href=\"./order-detail.html?ProducrId={{ProducrId}}\" target=\"_blank\"> <img src=\"{{imageHost}}{{productImage}}\" alt=\"{{productName}}\" class=\"p-img\"/> </a> </td> <td class=\"cell cell-info\"> <a href=\"./order-detail.html?ProducrId={{productId}}\" target=\"_blank\" class=\"link\">{{productName}}</a> </td> <td class=\"cell cell-price\">￥{{currentUnitPrice}}</td> <td class=\"cell cell-count\">{{quantity}}</td> <td class=\"cell cell-total\">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <p class=\"total\"> <span>订单总价:</span> <span class=\"total-price\">￥{{payment}}</span> </p> </div> </div>";

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-23 20:04:57
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 20:23:47
*/

__webpack_require__(13);
var _mm             = __webpack_require__(0);
var templateIndex   = __webpack_require__(14);
// 侧边导航
var navSide = {
    option : {
        name : '',
        navList : [
            {name : 'user-center', desc : '个人中心', href: './user-center.html'},
            {name : 'order-list', desc : '我的订单', href: './order-list.html'},
            {name : 'user-pass-update', desc : '修改密码', href: './user-pass-update.html'},
            {name : 'about', desc : '关于MMall', href: './about.html'}
        ]
    },
    init : function(option){
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    // 渲染导航菜单
    renderNav : function(){
        // 计算active数据
        for(var i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if(this.option.navList[i].name === this.option.name){
                this.option.navList[i].isActive = true;
            }
        };
        // 渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            navList : this.option.navList
        });
        // 把html放入容器
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = "{{#navList}} {{#isActive}} <li class=\"nav-item active\"> {{/isActive}} {{^isActive}} </li><li class=\"nav-item\"> {{/isActive}} <a class=\"link\" href=\"{{href}}\">{{desc}}</a> </li> {{/navList}} ";

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

/***/ })

},[100]);