package com.mmall.service;

import com.github.pagehelper.PageInfo;
import com.mmall.pojo.Shipping;
import com.mmall.common.ServerResponse;

/**
 * Created by wujinfan on 2017/8/16.
 */
public interface IShippingService {
//    public ServerResponse add(Integer userId, Shipping shipping);
//
//    public ServerResponse<String> del(Integer userId, Integer shippingId);
//
//    public ServerResponse update(Integer userId, Shipping shipping);
//
//    public ServerResponse<Shipping> select(Integer userId,Integer shippingId);
//
//    public ServerResponse<PageInfo> list(Integer userId, int pageNum, int pageSize);
    ServerResponse add(Integer userId, Shipping shipping);
    ServerResponse<String> del(Integer userId,Integer shippingId);
    ServerResponse update(Integer userId, Shipping shipping);
    ServerResponse<Shipping> select(Integer userId, Integer shippingId);
    ServerResponse<PageInfo> list(Integer userId, int pageNum, int pageSize);
}
