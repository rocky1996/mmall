//package com.mmall.service;
//
//import com.mmall.common.ServerResponse;
//import com.mmall.pojo.Category;
//
//import java.util.List;
//
///**
// * Created by wujinfan on 2017/8/10.
// */
//public interface ICategoryService {
//    public ServerResponse addCategory(String categoryName, Integer parentId);
//
//    public ServerResponse updateCategoryName(Integer categoryId,String categoryName);
//
//    public ServerResponse<List<Category>> getChildrenParallelCategory(Integer categoryId);
//
//    public ServerResponse<List<Integer>> selectCategoryAndChildrenById(Integer categoryId);
//}
package com.mmall.service;

import com.mmall.pojo.Category;

import java.util.List;
import com.mmall.common.ServerResponse;

/**
 * Created by geely
 */
public interface ICategoryService {
    ServerResponse addCategory(String categoryName, Integer parentId);
    ServerResponse updateCategoryName(Integer categoryId,String categoryName);
    ServerResponse<List<Category>> getChildrenParallelCategory(Integer categoryId);
    ServerResponse<List<Integer>> selectCategoryAndChildrenById(Integer categoryId);

}
