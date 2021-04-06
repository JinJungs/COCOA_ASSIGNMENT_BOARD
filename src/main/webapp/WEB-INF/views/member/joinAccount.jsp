<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css" media="screen" />
</head>

<body class="bg_gradation home memberBody">
	<div class="bigcontainer">
		<div class="join_container">
			<!-- ====================header====================-->
			<!-- <div class="header"> <div class="title"> <b>회원가입</b> </div> </div> -->
			<!-- ====================body====================-->
			<div class="body1">
				<div class="join_header">
					<div class="join_title">학생 회원가입</div>
					<div class="join_subtitle">KH에 정보 등록을 완료한 학생</div>
				</div>
				<div class="box1">
					<img src="/resources/img/cute1.png" border="0">
				</div>
				<div class="box3">
					<div class="btn_box">
						<button type="button" id="joinAccountStd">회원가입</button>
						<button type="button" onclick="fn_back()">돌아가기</button>
					</div>
				</div>
			</div>
			<div class="body2">
				<div class="join_header">
					<div class="join_title">강사 회원가입</div>
					<div class="join_subtitle">KH에서 아이디를 부여받은 강사</div>
				</div>
				<div class="box1">
					<img src="/resources/img/cute1.png" border="0">
				</div>
				<div class="box3">
					<div class="btn_box">
						<button type="button" id="joinAccountLec">회원가입</button>
						<button type="button" onclick="fn_back()">돌아가기</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
    document.getElementById("joinAccountStd").onclick = function() {
		location.href = "/users/joinAccountStd.users";
	}
	document.getElementById("joinAccountLec").onclick = function() {
		location.href = "/users/joinAccountLec.users";
	}
	function fn_back(){
		location.href = "/";
	}
	
	</script>
</body>
</html>