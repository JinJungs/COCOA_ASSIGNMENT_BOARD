package kh.cocoa.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.inject.Inject;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.cocoa.service.UsersServices;

@Controller
@RequestMapping("/email")
public class EmailController {

   @Autowired
   UsersServices service;

   @Inject //서비스 호출을 위한 의존성 
   JavaMailSender mailSender; // 메일 서비스를 위한 의존성을 주입
   @Autowired
   private HttpServletRequest request;

   /*-----------------------회원가입 /이메일 인증 (학생)-----------------------*/
   // 로깅을 위한 변수 - 개발을 하다가 어떤 변수값을 확인할 수 있는 것
   private static final Logger logger = LoggerFactory.getLogger(UserController.class);
   private static final String String = null;

   // 이메일 전송
   @RequestMapping("emailCheck.email")
   @ResponseBody
   public String mailSending(String email) {

      System.out.println("이메일 인증");
      System.out.println("이메일 주소 : " + email);
      Random r = new Random();
      int dice = r.nextInt(4589362) + 49311; // 이메일로 받는 인증코드 부분 (난수)

      String setfrom = "cocoaSemiProject@gmail.com";
      String tomail = request.getParameter("email"); // 받는 사람 이메일
      String title = "코코아 (학생) 회원가입 인증 이메일 입니다."; // 제목
      String content =
            System.getProperty("line.separator") + // 한줄씩 줄간격을 두기위해 작성
            System.getProperty("line.separator") +

            "안녕하세요. 저희 코코아 페이지를 찾아주셔서 감사합니다"

                  + System.getProperty("line.separator") +
                  System.getProperty("line.separator") +

                  "인증번호는 " + dice + " 입니다. "

                  + System.getProperty("line.separator") +
                  System.getProperty("line.separator") +

                  "받으신 인증번호를 회원가입 인증번호란에 입력해 주세요."; // 내용

      try {
         MimeMessage message = mailSender.createMimeMessage();
         MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

         messageHelper.setFrom(setfrom); // 보내는사람 생략하면 정상작동을 안함
         messageHelper.setTo(tomail); // 받는사람 이메일
         messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
         messageHelper.setText(content); // 메일 내용

         mailSender.send(message);
      } catch (Exception e) {
         System.out.println(e);
      }      

      Map<String,Object> map = new HashMap();
      map.put("dice", dice);
      JSONObject obj = new JSONObject(map);
      return obj.toString();
   }

   /*-----------------------회원가입 /이메일 인증 (강사)-----------------------*/

   // 이메일 전송
   @RequestMapping("emailCheckLec.email")
   @ResponseBody
   public String mailSendingLec( String email) {

      System.out.println("이메일 인증");
      System.out.println("이메일 주소 : " + email);

      Random r = new Random();
      int dice = r.nextInt(4589362) + 49311; // 이메일로 받는 인증코드 부분 (난수)

      String setfrom = "cocoaSemiProject@gmail.com";
      String tomail = request.getParameter("email"); // 받는 사람 이메일
      String title = "코코아 (강사)회원가입 인증 이메일 입니다."; // 제목
      String content =
            System.getProperty("line.separator") + // 한줄씩 줄간격을 두기위해 작성
            System.getProperty("line.separator") +

            "안녕하세요. 저희 코코아 페이지를 찾아주셔서 감사합니다"

               + System.getProperty("line.separator") +
               System.getProperty("line.separator") +

               "인증번호는 " + dice + " 입니다. "

               + System.getProperty("line.separator") +
               System.getProperty("line.separator") +

               "받으신 인증번호를 회원가입 인증번호란에 입력해 주세요."; // 내용

      try {
         MimeMessage message = mailSender.createMimeMessage();
         MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

         messageHelper.setFrom(setfrom); // 보내는사람 생략하면 정상작동을 안함
         messageHelper.setTo(tomail); // 받는사람 이메일
         messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
         messageHelper.setText(content); // 메일 내용

         mailSender.send(message);
      } catch (Exception e) {
         System.out.println(e);
      }      

      Map<String,Object> map = new HashMap();
      map.put("dice", dice);
      JSONObject obj = new JSONObject(map);

      return obj.toString();
   }
   /*-----------------------비번 찾기/이메일 인증 -----------------------*/
   //비번 찾기
   @RequestMapping("pwfind.email")
   @ResponseBody
   public String pwFind( String email) {
      System.out.println("비번 인증코드 전송");
      boolean result = service.isEmailExist(email);
      System.out.println(result);
      if(result) {
         Random r = new Random();
         int pwcomf = r.nextInt(4589362) + 49311; // 이메일로 받는 인증코드 부분 (난수)

         String setfrom = "cocoaSemiProject@gmail.com";
         String tomail = request.getParameter("email"); // 받는 사람 이메일
         String title = "코코아 비밀 번호 찾기 이메일 입니다."; // 제목
         String content =
               System.getProperty("line.separator") + // 한줄씩 줄간격을 두기위해 작성
               System.getProperty("line.separator") +

               "안녕하세요. 새 비밀번호로 변경하기 위한 인증번호 입니다."

               + System.getProperty("line.separator") +
               System.getProperty("line.separator") +

               "인증번호는 " + pwcomf + " 입니다. "

               + System.getProperty("line.separator") +
               System.getProperty("line.separator") +

               "받으신 인증번호를 비밀번호 찾기의 인증번호란에 입력해 주세요."; // 내용

         try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");

            messageHelper.setFrom(setfrom); // 보내는사람 생략하면 정상작동을 안함
            messageHelper.setTo(tomail); // 받는사람 이메일
            messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
            messageHelper.setText(content); // 메일 내용

            mailSender.send(message);
         } catch (Exception e) {
            System.out.println(e);
         }      

         Map<String,Object> map = new HashMap();
         map.put("pwcomf", pwcomf);
         JSONObject obj = new JSONObject(map);

         return obj.toString();
      }else {
         System.out.println("실패");
         return "error";
      }
   }

   /*-----------------------예외처리-----------------------*/
   @ExceptionHandler
   public String exceptionhandler(Exception e) {
      e.printStackTrace();
      return "error";
   }
}