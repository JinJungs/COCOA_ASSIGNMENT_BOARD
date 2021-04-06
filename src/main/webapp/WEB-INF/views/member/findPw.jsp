<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
   src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
   charset="utf-8"></script>
<script type="text/javascript"
   src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
   media="screen" />
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
   <style>
   .width{
   height: 20px;
   text-align: top;
   }
   #emailtxt,#comfNmtxt{
   font-size:0.7rem;
   }
   #pwmsg,#pwchk{
    color: red;
   font-size: 0.7rem;
   }
   #pw1, #pw2{
   margin-bottom: 2px;
   }
   .bodyFindPw{
   width: 100%;
   height: 40%;
   }
   .nomargin{
   margin-bottom: 2px;
   }
   .btn_box{
   height: 25%;
   }
   #comfNm{
   margin-top: 3px;
      background-color: #c8c8c8;
   }
   </style>
</head>
<body class="memberBody bg_gradation">
    <form action="/users/updatePw.users" method="post">
      <div class="bigcontainer">
         <div class="container" style=height:>
            <!-- ====================header====================-->
            <div class="header">
               <div class="logo">

                  <div class="dot">
                     <img src="/resources/img/icon_cocoa.png" alt="">
                  </div>
               </div>
            </div>
            <!-- ====================body====================-->
            <div class="bodyFindPw">
               <div class="id_box">
                  <input id="email" name="email" type="text"
                     placeholder="가입시 입력한 이메일을 입력하세요" required="required">
                     <br><span id="emailtxt"></span>
               </div>
               <div class="login_box">
                  <button type="button" id="emailCheck" onclick="emailSend()">이메일로
                     인증번호 받기</button>
               </div>
               <div class="pw_box">
                  <input id="comfNm" name="comfNm" type="text"
                     placeholder="인증번호를 입력하세요" onchange="noSpaceForm(this);">
                     <br><span id="comfNmtxt"></span>
               </div>
               <div class="id_box nomargin">
                  <input id="pw" name="pw" type="password"
                     placeholder="새비밀번호를 입력하세요." required="required">     
      <input type="hidden" id="getpwcomf" value="" />
               </div>
               <div class="width" id="pwchk"></div>

               <div class="id_box nomargin">
                  <input id="pw2" name="pw2" type="password"
                     placeholder="비밀번호를 한번 더 입력하세요." required="required">
               </div>
               <div class="width" id="pwmsg"></div>

               <div class="btn_box">
                  <!-- <div class="bb"> -->
                  <button type="button" id="newPwChk" onclick="newPwCtf()">인증
                     확인</button>
                  <button type="button" id="done" onclick="doneCk()">완료</button>
                  <button type="button" id="return">뒤로가기</button>

               </div>
            </div>
            <!-- ====================footer====================-->
            <div class="footer"></div>

         </div>
      </div>


   </form>
   <script>
      //뒤로가기 버튼
      document.getElementById("return").onclick = function() {
         location.href = "/";
      }
      //인증번호 input에 띄어쓰지 방지
      function noSpaceForm(obj) {
         var str_space = /\s/;
         if (str_space.exec(obj.value)) {
            alert("해당 항목에는 공백을 사용할 수 없습니다.\n공백 제거됩니다.");
            obj.focus();
            obj.value = obj.value.replace(' ', ''); // 공백제거
            return false;
         }
      }
      //이메일 전송
      function emailSend() {
         let email = $("#email").val();
         let emailYN = isEmail(email); // 이메일 유효성 검사
         console.log(email);
         if (emailYN == true) {
            $.ajax({
               type : "post",
               url : "/email/pwfind.email",
               data : {
                  email : email
               },
               dataType : "json",
               success : function(data) {
                  $("#getpwcomf").val(data.pwcomf);
                  $("#emailtxt").text('이메일 전송 성공! 이메일을 확인해 주세요');
                  $('#comfNm').val('');
               },
               error : function(e) {
                   $("#emailtxt").css("color", "red");
                  $("#emailtxt").text('존재하지 않은 이메일 입니다.');
                  $('#comfNm').val('');
                      $('#comfNm').focus();
               }
            });
         } else {
          $("#emailtxt").css("color", "red");
           $("#emailtxt").text('형식에 맞지 않는 이메일 입니다. 다시 입력하세요.')
         }
      }
      //이메일 인증 - 이메일 유효성 검사
      function isEmail(asValue) {
         var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
         return regExp.test(asValue);//알맞은 형식의 이메일만 true로 리턴

      }
      //인증번호 확인
      function newPwCtf() {
         var comfNm = $('#comfNm').val();
         console.log(comfNm);
         let comfNmChk = isNumber(comfNm); // 인증번호 숫자 유효성 검사
         var pwcomf = $("#getpwcomf").val(); //이메일에 전송된 dice받아오기
         console.log(pwcomf);
         if (comfNmChk == true) {
            if (comfNm == pwcomf) {
            $("#comfNmtxt").css("color", "black");
               $("#comfNmtxt").text('인증번호 일치. 새로운 비밀번호를 입력해 주세요.');
            } else if (comfNm != pwcomf) {
                   $("#comfNmtxt").css("color", "red");
               $("#comfNmtxt").text('인증번호 불일치. 인증번호를 다시 한번 확인하세요.');
               $('#comfNm').val('');
               $('#comfNm').focus();
            }
         } else {
         $("#comfNmtxt").css("color", "red");
         $("#comfNmtxt").text('최대 7자리 숫자만 입력 가능합니다.');
         $('#comfNm').val('');
         $('#comfNm').focus();
         }
      }

      //인증 번호 유효성 검사 
      function isNumber(asValue) {
         var regExp = /(^[0-9]{1,7}$)/;//인증번호는 6-7자리만입력가능
         return regExp.test(asValue);//알맞은 형식의 번호만 true로 리턴

      }

      
      //비번확인
      $('#pw2').blur(function() {
         if ($("#pw2").val() != "") {
            if ($('#pw').val() != $('#pw2').val()) {
               if ($('#pw2').val() != '') {
                  $("#pwmsg").css("color", "white");
                  $("#pwmsg").text("비밀번호가 일치하지 않습니다.");
                  $('#pw2').val('');
                  $('#pw2').focus();
               }
            } else {
               $("#pwmsg").css("color", "blue");
               $("#pwmsg").text("비밀번호가 일치합니다.");
            }
         } else {
            $("#pwmsg").text("");
         }
      });
      $("#pw")
            .blur(
                  function() {
                     var pwCheck = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
                     if (($("#pw").val() != "")) {
                        if (!pwCheck.test($("#pw").val())) {
                           $("#pwchk").text(
                                 "8~16자 영문 대 소문자, 숫자 특수문자를 사용하세요");
                           $("#pw").val("");
                        } else {
                           $("#pwchk").text("");
                        }
                     } else {
                        $("#pwchk").text("");
                     }
                  })
      //인증번호 작동 조건 - 이게 있음 밑에 유효성에 따로 해주지 않아도 됨
     
      // 유효성 검사
       function doneCk() {
         if ($("#email").val() == 0) {
            alert("이메일을 입력해 주세요.");
            $("#email").focus();
            return false;
         }
         if ($("#pw").val() == 0) {
            alert("새 비밀번호를 입력해 주세요.");
            $("#pw").focus();
            return false;
         }
         if ($("#pw2").val() == 0) {
            alert("비밀번호를 한번 더 입력해 주세요.");
            $("#pw2").focus();
            return false;
         }
         if ($("#comfNm").val() == $("#getpwcomf").val()) {
             $("#done").attr("type", "submit");
          } else {
             alert("인증번호 확인 하세요.")
          }
      } 
   </script>

</body>
</html>