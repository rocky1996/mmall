//package com.mmall.service;
//
//import com.mmall.common.ServerResponse;
//import com.mmall.vo.CartVo;
//
///**
// * Created by wujinfan on 2017/8/13.
// */
//public interface ICartService {
//    public ServerResponse<CartVo> add(Integer userId, Integer productId, Integer count);
//
//    public ServerResponse<CartVo> update(Integer userId,Integer productId,Integer count);
//
//    public ServerResponse<CartVo> deleteProduct(Integer userId,String productIds);
//
//    public ServerResponse<CartVo> list(Integer userId);
//
//    public ServerResponse<CartVo> selectOrUnselectAll(Integer userId,Integer productId,Integer checked);
//
//    public ServerResponse<Integer> getCartProductCount(Integer userId);
//
//
//}
package com.mmall.service;

import com.mmall.vo.CartVo;
import com.mmall.common.ServerResponse;

/**
 * Created by geely
 */
public interface ICartService {
    ServerResponse<CartVo> add(Integer userId, Integer productId, Integer count);
    ServerResponse<CartVo> update(Integer userId,Integer productId,Integer count);
    ServerResponse<CartVo> deleteProduct(Integer userId,String productIds);

    ServerResponse<CartVo> list (Integer userId);
    ServerResponse<CartVo> selectOrUnSelect (Integer userId,Integer productId,Integer checked);
    ServerResponse<Integer> getCartProductCount(Integer userId);
}
