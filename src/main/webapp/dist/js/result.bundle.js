webpackJsonp([15],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-08-05 13:44:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-03 14:05:19
*/


__webpack_require__(108);
__webpack_require__(18);
var _mm = __webpack_require__(0);

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type === 'payment'){
    	var orderNumber = _mm.getUrlParam('orderNumber');
    	var $orderNumber = $element.find('order-number');
    	$orderNumber.attr('href',$orderNumber.attr('href')+orderNumber);
    }
    $element.show();
})

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ })

},[107]);