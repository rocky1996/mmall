//package com.mmall.service;
//
//import org.springframework.web.multipart.MultipartFile;
//
///**
// * Created by wujinfan on 2017/8/12.
// */
//public interface IFileService {
//    public String upload(MultipartFile file, String path);
//}
package com.mmall.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by geely
 */
public interface IFileService {

    String upload(MultipartFile file, String path);
}
