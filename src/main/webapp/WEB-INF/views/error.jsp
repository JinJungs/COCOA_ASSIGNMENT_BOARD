<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>
.logo>img {
	width: 100%;
	opacity: 0.3;
}
}
</style>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
	media="screen" />
</head>
<body>
	<div class="err_bigcontainer">
		<div class="err_container">
			<!-- ====================header====================-->
			<div class="header">
				<div class="logo">
					<img src="/resources/img/icon_errcocoa.png" alt="">

				</div>
			</div>
			<!-- ====================body====================-->
			<div class="err_body">
				<h1>죄송합니다. 현재 요청하신 페이지를 찾을 수 없습니다.</h1>
				<br>존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되었을 수 있습니다. <br>궁금한
				점이 있다면 관리자에게 문의해 주시기 바랍니다. <br>010 1234 5678 <br>감사합니다
				<div class=""></div>
				<button type="button" id="goHome" class="common errBtn"
					style="margin-top: 10px">홈으로</button>
			</div>
		</div>
	</div>
	<script type="text/javascript">
        document.getElementById("goHome").onclick = function(){
         location.href = "/";
      }
        </script>
</body>
</html>