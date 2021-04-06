
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<style>
	#login{
		margin-top: 10px;
	}
	#resultid{
		font-size: 1.5rem;
		color :#17418C;
	}
	.pw_box {
		height: auto;
		font-size:0.6rem;
	}
	.pw_box > *{
   		margin:0;
   		font-size:0.6rem;
   }
   #resultid{
   		margin:0;
   		font-size:0.6rem;	
   }
</style>
<!-- Naver API -->
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
	media="screen" />
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
	media="screen" />
</head>

<body class="memberBody bg_gradation">
		<div class="bigcontainer">
			<div class="container">
				<!-- ====================header====================-->
				<div class="header">
					<div class="logo">

						<div class="dot">
							<img src="/resources/img/icon_cocoa.png" alt="">
						</div>
					</div>
				</div>
				<!-- ====================body====================-->
				<div class="body">
					<div class="id_box">
						<input id="us_id" name="us_id" type="text"
							placeholder="이메일을 입력하세요" required="required">
					</div>
					<div class="pw_box">
						
					</div>
					<div class="login_box">
						<button type="button" id="login" onclick="fn_getId()">아이디 찾기</button>
					</div>
					<div class="chk_box">
						<div class="cb"></div>
					</div>
					<div class="btn_box">
						<!-- <div class="bb"> -->
						<button type="button" id="joinAccount" onclick="fn_singup()">회원가입</button>
						<button type="button" id="findPw" onclick="fn_findPw()">PW찾기</button>
						<button type="button" id="findPw" onclick="fn_back()">뒤로가기</button>
						<!-- </div> -->
					</div>
				</div>
				<!-- ====================footer====================-->
				<div class="footer"></div>
			</div>
		</div>
	<script>
		function fn_getId(){
			var email = $("#us_id").val();
			if(email.length!=0){
				$.ajax({
					data :{email},
					type :"POST",
					url : "/users/getfindid.users",
					dataType :"json",
					success : function(data){
						if(data.length!=0){
							var count = data[0].count;
							html="총"+count+"개의 결과가 있습니다.";
							for(var i=0;i<data.length;i++){
								html+="<p id=resultid>"+data[i].us_id+"</p>";
							}
							$(".pw_box").html(html);
						}else{
							html="입력하신 정보와 일치하는 계정이 없습니다.";
							$(".pw_box").html(html);
						}
						
				 
					}
				})
			}
		}
		function fn_back(){
			location.href="/";
		}
		function fn_findPw(){
			location.href="/users/findPw.users";
		}
		function fn_singup(){
			location.href="/users/joinAccount.users";
		}
	</script>
</body>
</html>