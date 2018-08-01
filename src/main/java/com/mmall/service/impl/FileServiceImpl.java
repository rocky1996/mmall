//package com.mmall.service.impl;
//
//import com.google.common.collect.Lists;
//import com.mmall.service.IFileService;
//import com.mmall.util.FTPUtil;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.File;
//import java.util.UUID;
//
///**
// * Created by wujinfan on 2017/8/12.
// */
//@Service("iFileService")
//public class FileServiceImpl implements IFileService {
//    private Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);
//
//    public String upload(MultipartFile file, String path) {
//        String fileName = file.getOriginalFilename();
//
//        //获取扩展名
//        String fileExtensionName = fileName.substring(fileName.lastIndexOf(".")+1);
//        String uploadFileName = UUID.randomUUID().toString()+"."+fileExtensionName;
//        logger.info("开始上传文件，上传的文件名:{},上传的路径:{},新文件名:{}",fileName,path,uploadFileName);
//
//        File fileDir = new File(path);
//        if(!fileDir.exists()){
//            fileDir.setWritable(true);//赋予权限，可写
//            fileDir.mkdirs();
//        }
//
//        File targetFile = new File(path,uploadFileName);
//
//        try {
//            //文件上传成功
//            file.transferTo(targetFile);
//
//            //todo 将targerFile上传到我们的ftp服务器上面
//            FTPUtil.uploadFile(Lists.<File>newArrayList(targetFile));
//
//            //todo 上传完成之后，删除upload下面的文件
//            targetFile.delete();
//        }catch(Exception e){
//            logger.error("上传文件异常",e);
//        }
//        return targetFile.getName();
//    }
//
////    public static void main(String[] args) {
////        String fileName = "abc.jpg";
////        System.out.println(fileName.substring(fileName.lastIndexOf(".")));
////    }
//}
package com.mmall.service.impl;

import com.google.common.collect.Lists;
import com.mmall.service.IFileService;
import com.mmall.util.FTPUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by geely
 */
@Service("iFileService")
public class FileServiceImpl implements IFileService {

    private Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);


    public String upload(MultipartFile file,String path){
        String fileName = file.getOriginalFilename();
        //扩展名
        //abc.jpg
        String fileExtensionName = fileName.substring(fileName.lastIndexOf(".")+1);
        String uploadFileName = UUID.randomUUID().toString()+"."+fileExtensionName;
        logger.info("开始上传文件,上传文件的文件名:{},上传的路径:{},新文件名:{}",fileName,path,uploadFileName);

        File fileDir = new File(path);
        if(!fileDir.exists()){
            fileDir.setWritable(true);
            fileDir.mkdirs();
        }
        File targetFile = new File(path,uploadFileName);


        try {
            file.transferTo(targetFile);
            //文件已经上传成功了


            FTPUtil.uploadFile(Lists.newArrayList(targetFile));
            //已经上传到ftp服务器上

            targetFile.delete();
        } catch (IOException e) {
            logger.error("上传文件异常",e);
            return null;
        }
        //A:abc.jpg
        //B:abc.jpg
        return targetFile.getName();
    }

}
