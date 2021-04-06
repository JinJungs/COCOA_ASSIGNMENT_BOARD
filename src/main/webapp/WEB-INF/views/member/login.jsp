
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
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
	media="screen" />
</head>
<body class="bg_gradation home memberBody" >
	<form action="/users/login.users" method="post">
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
							placeholder="아이디를 입력하세요" required="required">
					</div>
					<div class="pw_box">
						<input id="pw" name="pw" type="password" placeholder="비밀번호를 입력하세요"
							required="required"><br>
							<span id="getResult"></span>
					</div>
					<div class="login_box">
						<button type="submit" id="login">로그인</button>
					</div>
					<div class="chk_box">
						<div class="cb">
							<input type="checkbox" id="rememberId" name="rememberId"
								value="아이디 기억하기" checked="checked"> <label
								for="rememberId"> <b>아이디 기억하기</b>
							</label>
						</div>
					</div>
					<input type="hidden" id="loginFailed" value="${loginFailed}" />
					<div class="btn_box">
						<!-- <div class="bb"> -->
						<button type="button" id="findId">ID찾기</button>
						<button type="button" id="findPw">PW찾기</button>
						<button type="button" id="joinAccount">회원가입</button>
						<!-- </div> -->

					</div>
				</div>
				<!-- ====================footer====================-->
				<div class="footer"></div>

			</div>
		</div>
	</form>

	
	
	
	<!-- 회원가입 성공 여부 /학생 -->
	<c:if test="${successStd>0 }">
		<script>
			alert("회원가입에 성공하셨습니다.");
		</script>
	</c:if>
	<c:if test="${failedStd>0 }">
		<script>
			alert("회원가입에 실패하셨습니다.")
		</script>
	</c:if>

	<!-- 회원가입 성공 여부 /강사 -->
	<c:if test="${successLec>0 }">
		<script>
			alert("회원가입에 성공하셨습니다.");
		</script>
	</c:if>
	<c:if test="${failedLec>0 }">
		<script>
			alert("회원가입에 실패하셨습니다.")
		</script>
	</c:if>
	<!-- =================================Script==============================================-->
	<script>
		document.getElementById("findId").onclick = function() {
			location.href = "/users/findId.users";
		}
		document.getElementById("findPw").onclick = function() {
			location.href = "/users/findPw.users";
		}

		document.getElementById("joinAccount").onclick = function() {
			location.href = "/users/joinAccount.users";
		}
	</script>

	<!-- 아이디값 쿠키에 저장하기 -->
	<script>
	$(document).ready(function(){
		if($("#loginFailed").val()=="false"){
			$("#getResult").text("입력하신 정보와 일치하는 데이터가 없습니다.");
			$("#getResult").css("color","#2856AA");
		}
	    // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
	    var userInputId = getCookie("userInputId");
	    $("input[id='us_id']").val(userInputId); 
	     
	    if($("input[id='us_id']").val() != ""){ 
	       // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
	        $("#rememberId").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
	    }
	     
	    $("#rememberId").change(function(){ // 체크박스에 변화가 있다면,
	        if($("#rememberId").is(":checked")){ // ID 저장하기 체크했을 때,
	            var userInputId = $("input[id='us_id']").val();
	            setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
	        }else{ // ID 저장하기 체크 해제 시,
	            deleteCookie("userInputId");
	        }
	    });
	     
	    // ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
	    $("input[id='us_id']").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
	        if($("#rememberId").is(":checked")){ // ID 저장하기를 체크한 상태라면,
	            var userInputId = $("input[id='us_id']").val();
	            setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
	        }
	    });
	 
	    //쿠키를 위한 함수 
	    function setCookie(cookieName, value, exdays){
	        var exdate = new Date();
	        exdate.setDate(exdate.getDate() + exdays);
	        var cookieValue = escape(value) + ((exdays==null)?"":";expires="+exdate.toGMTString());
	        document.cookie = cookieName + "=" + cookieValue;
	    }
	     
	    function deleteCookie(cookieName){
	        var expireDate = new Date();
	        expireDate.setDate(expireDate.getDate() - 1);
	        document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
	    }
	     
	    function getCookie(cookieName) {
	        cookieName = cookieName + '=';
	        var cookieData = document.cookie;
	        var start = cookieData.indexOf(cookieName);
	        var cookieValue = '';
	        if(start != -1){
	            start += cookieName.length;
	            var end = cookieData.indexOf(';', start);
	            if(end == -1)end = cookieData.length;
	            cookieValue = cookieData.substring(start, end);
	        }
	        return unescape(cookieValue);
	    }
	});
     </script>
</body>
</html>