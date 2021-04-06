<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Join Account Std</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
   media="screen" />
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
<style>
#comfNmtxt,#emailtxt{
   font-size:0.7rem;
}
   #ctfBtn, #pop{
      padding-bottom: 23px;
      line-height: 15px;
      background-color: #FF6F6E;
   }
   #emailCheck{
      padding-bottom: 23px;
      line-height: 15px;
   }
</style>
</head>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<body class="memberBody bg_gradation">

  
        <form id="signupform" action="/users/joinAccountDoneStd.users" method="post">
            <div class="bigcontainer">
                <input type="hidden" id="duplechk" value="false"/>
                <div class="join2_container">
                    <!-- ====================header====================-->
                    <div class="join2_header">
                        학생 회원 가입
                    </div>
                    <!-- ====================body====================-->
                    <div class="join2_body">
                        <div class="joinRow">
                            <span>ID :</span>
                            <input type="text" id="us_id" name="us_id" required="required">
                            <button type="button" id="pop">중복확인</button>
                            <div></div>
                            <div class="join_width" id="idmsg"></div>
                        </div>

                        <div class="joinRow">
                            PW :
                            <input type="password" id="pw" name="pw" required="required">
                            <div></div><div></div>
                            <div class="join_width" id="pwchk"></div>
                        </div>

                        <div class="joinRow">
                            PW 확인 :
                            <input type="password" id="pw2" required="required">
                            <div></div><div></div>
                            <div class="join_width" id="pwmsg"></div>
                        </div>
						 <input type="hidden" id="accountseq" value=""/>
      					 <input type="hidden" id="emailchk" value=""/>
                        <div class="joinRow">
                               이름 :
                               <input type="text" id="name" name="name" required="required">
                            <div></div><div></div>
                            <div class="join_width" id="namemsg"></div>
                        </div>

                        <div class="joinRow">
                               연락처 :
                            
                            <input type="text" id="phone" name="phone" required="required">
                            <div></div><div></div>
                            <div class="join_width" id="phonemsg"></div>
                        </div>

                        <div class="joinRow">
                               이메일 :
                            <input type="text" id="email" name="email" required="required">
                            <button type="button" id="emailCheck" onclick="emailSend()">전송</button>
                            <br><span id="emailtxt"></span>
                            <div></div>
                            <div class="join_width" id="emailmsg"></div>
                        </div>

                        <div class="joinRow">
                            <input
                                type="text"
                                id="ctfNum"
                                name="ctfNum"
                                placeholder="인증번호 입력"
                                required="required" style=width:40% onchange="noSpaceForm(this)" >
                                <div></div>
                                <br><span id="comfNmtxt"></span>
                       <button type="button" id="ctfBtn" onclick="emailCtf()" >번호 인증</button>
                        </div>
                    </div>

                    <!-- ====================footer====================-->
                    <div class="join2_footer">
                            <input class="memCom" type="button" id="done" value="회원가입" onclick="signup()">
                            <input class="memCom" type="reset" id="reset" value="다시입력">
                            <input class="memCom" type="button" id="return" value="뒤로가기">
                    </div>
                </div>
            </div>
        </form>
   <script src=/resources/js/joinAccountstd.js>

   </script>
</body>
</html>