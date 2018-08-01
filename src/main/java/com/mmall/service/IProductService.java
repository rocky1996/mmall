//package com.mmall.service;
//
//import com.github.pagehelper.PageInfo;
//import com.mmall.common.ServerResponse;
//import com.mmall.pojo.Product;
//import com.mmall.vo.ProductDetailVo;
//
///**
// * Created by wujinfan on 2017/8/11.
// */
//public interface IProductService {
//    public ServerResponse saveOrUpdateProduce(Product product);
//
//    public ServerResponse<String> setSaleStatus(Integer productId,Integer status);
//
//    public ServerResponse<ProductDetailVo> managerProductDetail(Integer productId);
//
//    public ServerResponse<PageInfo> getProductList(int pageNum, int pageSize);
//
//    public ServerResponse searchProduct(String productName, Integer productId, int pageNum, int pageSize);
//
//    public ServerResponse<ProductDetailVo> getProductDetail(Integer productId);
//    public ServerResponse<PageInfo> getProductByKeywordCategory(String keyword,Integer categoryId,int pageNum,int pageSize,String orderBy);
//
//
//}
package com.mmall.service;

import com.github.pagehelper.PageInfo;
import com.mmall.pojo.Product;
import com.mmall.vo.ProductDetailVo;
import com.mmall.common.ServerResponse;

/**
 * Created by geely
 */
public interface IProductService {

    ServerResponse saveOrUpdateProduct(Product product);

    ServerResponse<String> setSaleStatus(Integer productId,Integer status);

    ServerResponse<ProductDetailVo> manageProductDetail(Integer productId);

    ServerResponse<PageInfo> getProductList(int pageNum, int pageSize);

    ServerResponse<PageInfo> searchProduct(String productName,Integer productId,int pageNum,int pageSize);

    ServerResponse<ProductDetailVo> getProductDetail(Integer productId);

    ServerResponse<PageInfo> getProductByKeywordCategory(String keyword,Integer categoryId,int pageNum,int pageSize,String orderBy);
}
