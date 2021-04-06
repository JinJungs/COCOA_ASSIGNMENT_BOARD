<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<!-- include stylesheet-->
<link rel="stylesheet" href="/resources/css/common.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/resources/css/dashBoard.css" type="text/css" media="screen" />

<!-- include libraries(jQuery) -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<header>
		<div>과목 대시보드</div>
		<div class="line"></div>
	</header>
	<main>
		<div id="subjectContainer">
			<!-- 하나의 행에 3개씩 들어가는 rowContainer-->
			<c:choose>
				<c:when test="${list.size()>0}">
					<!-- 제출한 과제 보기 -->
					<div class="dashBox" id="dashBoxSubmit">
						<div class="colorBox" id="colorBoxSubmit" style="background-color: #4554A4"></div>
						<div class="nameBox" id="nameBoxSubmit">
							<a href="/hw/myHwSubmitView.hw?cpage=1">제출한 과제보기</a>
						</div>
					</div>

					<!-- 하나의 대시보드 카드 -->
					<c:forEach var="i" items="${list}">
						<div class="dashBox" id="dashBox${i.seq}">
							<div class="colorBox" id="colorBox${i.seq}" style="background-color: ${i.color}">
							</div>
							<div class="nameBox" id="nameBox${i.seq}">
								<a href="/hw/hwListView.hw?subject_seq=${i.seq}"><xmp>${i.name}</xmp></a>
							</div>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<span id="noSubject">과목이 없습니다.</span>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="empty"></div>
	</main>
</body>
<script>
	// getElementsByClassName는 변수명 통째로 함수를 실행할 수는 없다.
	// dashBox 변수선언
	let dashBox = document.getElementsByClassName("dashBox");

	// 1. dashBox 클릭시 해당 과목게시판으로 이동
 	<c:forEach var="i" items="${list}">
		document.getElementById("colorBox${i.seq}").onclick = function(e) {
			console.log("colorBox 클릭 : " +e.target);
			if(e.target !==this) return;
			location.href = "/hw/hwListView.hw?subject_seq=${i.seq}";
		}
		document.getElementById("nameBox${i.seq}").onclick = function(e) {
			console.log("nameBox 클릭 : " +e);
			location.href = "/hw/hwListView.hw?subject_seq=${i.seq}";
		}
	</c:forEach>
	
	// 1.2. 제출한 과제보기도 마찬가지로 클릭시 내과제보기로 이동
		document.getElementById("colorBoxSubmit").onclick = function(e) {
			if(e.target !==this) return;
			location.href = "/hw/myHwSubmitView.hw?cpage=1";
		}
		document.getElementById("nameBoxSubmit").onclick = function(e) {
			location.href = "/hw/myHwSubmitView.hw?cpage=1";
		}

	// 2. 마우스를 올렸을 때 그림자가 더 번지도록
	for (let i = 0; i < dashBox.length; i++) {
		dashBox[i].onmouseover = function() {
			dashBox[i].style.boxShadow = "0.3rem 0.3rem 0.3rem #868E96";
		}
		dashBox[i].onmouseout = function() {
			dashBox[i].style.boxShadow = "0.2rem 0.2rem 0.2rem #C8C8C8";
		}
	}
	
</script>
</html>