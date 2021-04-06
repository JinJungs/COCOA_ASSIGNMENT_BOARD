<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<style>

</style>

<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
	media="screen" />
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
	media="screen" />
</head>
<body>

	<c:if test="${login != null}">
		<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
		<header>
			<div>학생마이페이지</div>
			<div class="line"></div>
		</header>
		<main>
			<div class="my_bigcontainer">
				<div class="my_left">
					<div class="profile">
						<div id="image_container">
							<c:choose>
								<c:when test="${empty imgurl}">
									<img src="/resources/img/cute1.png"
										style="WIDTH: 150px; HEIGHT: 150px">
								</c:when>
								<c:otherwise>
									<img id="img" src="${imgurl}"
										style="WIDTH: 150px; HEIGHT: 150px">
								</c:otherwise>
							</c:choose>
						</div>
					</div>
					<div class="my_btn">
						<button class="common" id="modify" style="background-color: var(--bg-primary)" >정보수정</button>
					</div>
				</div>
				<div class="mypage_container">
					<div class="txt1">
						<div class="mark"></div>
						아이디 :
					</div>
					<div class="txt2">
						<div class="mark"></div>
						이름 :
					</div>
					<div class="txt3">
						<div class="mark"></div>
						번호 :
					</div>
					<div class="txt4">
						<div class="mark"></div>
						이메일 :
					</div>
					<div class="txt5">
						<div class="mark"></div>
						수강 클래스 :
					</div>
					<div class="txt6">
						<div class="mark"></div>
						담당 강사님 :
					</div>
					<div class="input1">${list.us_id }</div>
					<div class="input2">${list.name }</div>
					<div class="input3">${list.phone }</div>
					<div class="input4">${list.email }</div>
					<div class="input5">${className}</div>
					<div class="input6">${lecName}</div>
				</div>
			</div>
		</main>
	</c:if>
</body>

<!-- 정보수정 / 로그아웃 -->
<script>
   document.getElementById("modify").onclick = function() {
      location.href = "/users/mypageStdModify.users";
   }
</script>
<!-- 로그인 성공 여부 -->
<c:if test="${result!=null }">
	<c:choose>
		<c:when test="${result}">
			<script>
               alert("Login Success!")
            </script>
		</c:when>
		<c:otherwise>
			<script>
               alert("Login Failed!")
            </script>
		</c:otherwise>
	</c:choose>
</c:if>
</html>