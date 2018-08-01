//package com.mmall.service;
//
//import com.mmall.common.ServerResponse;
//import com.mmall.pojo.User;
//
///**
// * Created by wujinfan on 2017/8/8.
// */
//public interface IUserService {
//
//    public ServerResponse<User> login(String username, String password);
//
//    public ServerResponse<String> register(User user);
//
//    public ServerResponse<String> checkVaild(String str,String type);
//
//    public ServerResponse selectQuestion(String username);
//
//    public ServerResponse<String> checkAnswer(String username,String question,String answer);
//
//    public ServerResponse<String> forgetRestPassword(String username,String passwordNew,String forgetToken);
//
//    public ServerResponse<String> resetPassword(String passwordOld,String passwordNew,User user);
//
//    public ServerResponse<User> updateInformation(User user);
//
//    public ServerResponse<User> getInformation(Integer userId);
//
//    public ServerResponse checkAdminRole(User user);
//}
package com.mmall.service;

import com.mmall.pojo.User;
import com.mmall.common.ServerResponse;

/**
 * Created by geely
 */
public interface IUserService {

    ServerResponse<User> login(String username, String password);

    ServerResponse<String> register(User user);

    ServerResponse<String> checkValid(String str,String type);

    ServerResponse selectQuestion(String username);

    ServerResponse<String> checkAnswer(String username,String question,String answer);

    ServerResponse<String> forgetResetPassword(String username,String passwordNew,String forgetToken);

    ServerResponse<String> resetPassword(String passwordOld,String passwordNew,User user);

    ServerResponse<User> updateInformation(User user);

    ServerResponse<User> getInformation(Integer userId);

    ServerResponse checkAdminRole(User user);
}
