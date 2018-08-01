package com.mmall.service;

import com.github.pagehelper.PageInfo;
import com.mmall.vo.OrderVo;
import com.mmall.common.ServerResponse;

/**
 * Created by wujinfan on 2017/8/18.
 */
public interface IOrderService {
//    public ServerResponse createOrder(Integer userId, Integer shippingId);
//    public ServerResponse<String> cancel(Integer userId,Long orderNo);
//    public ServerResponse getOrderCartProduct(Integer userId);
//    public ServerResponse<OrderVo> getOrderDetail(Integer userId, Long orderNo);
//    public ServerResponse<PageInfo> getOrderList(Integer userId, int pageNum, int pageSize);
//
//
//    public ServerResponse<PageInfo> manageList(int pageNum,int pageSize);
//    public ServerResponse<OrderVo> manageDetail(Long orderNo);
//    public ServerResponse<PageInfo> manageSearch(Long orderNo,int pageNum,int pageSize);
//    public ServerResponse<String> manageSendGoods(Long orderNo);

//    ServerResponse pay(Long orderNo, Integer userId, String path);
//    ServerResponse aliCallback(Map<String,String> params);
//    ServerResponse queryOrderPayStatus(Integer userId,Long orderNo);
    ServerResponse createOrder(Integer userId,Integer shippingId);
    ServerResponse<String> cancel(Integer userId,Long orderNo);
    ServerResponse getOrderCartProduct(Integer userId);
    ServerResponse<OrderVo> getOrderDetail(Integer userId, Long orderNo);
    ServerResponse<PageInfo> getOrderList(Integer userId, int pageNum, int pageSize);



    //backend
    ServerResponse<PageInfo> manageList(int pageNum,int pageSize);
    ServerResponse<OrderVo> manageDetail(Long orderNo);
    ServerResponse<PageInfo> manageSearch(Long orderNo,int pageNum,int pageSize);
    ServerResponse<String> manageSendGoods(Long orderNo);

}
