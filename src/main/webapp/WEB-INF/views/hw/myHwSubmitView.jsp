<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/resources/css/dashBoard.css" type="text/css" media="screen" />
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<header>
		<div>내 과제</div>
	</header>
	<main>
		<!-- 번호, 과목명, 과제이름, 제출일자,제출여부    // 과제이름도 포함..? // 작성자는 나니까 빼고-->
		<!--제출여부는 미제출시 제출버튼으로 바뀌면 좋을듯-->
		<!-- 번호?, name(Subject),title(Hw_list), writer_ID(Hw_submit), write_date(Hw_submit) -->
		<!-- where writer_ID(Hw_submit) = id -->
		<!-- 제목 클릭시 해당 페이지로 이동? 아니면 팝업으로 띄움(modal처럼)-->
		<!-- 제출여부는 어떻게 확인하지? select count(*) from Hw_submit where list_seq=? and writer_id=? -->
		<div class="myHw_container">
			<div class="listHead">
				<div class="hSeq">번호</div>
				<div class="hSubject_name">과목명</div>
				<div class="hHw_list_title">과제이름</div>
				<div class="hSubmit_date">제출일자</div>
				<div class="hOx">제출여부</div>
			</div>
			<div class="listContents">
				<c:forEach var="i" items="${myList}">
					<div class="listItem">
						<div class="rowNum">${i.list_seq}</div>
						<div class="subject_name"><xmp>${i.subject_name}</xmp></div>
						<div class="hw_list_title"><a href="/hw/hwSubmit.hw?list_seq=${i.list_seq}&cpage=1"><xmp>${i.list_title}</xmp></a></div>
						<div class="write_date">${i.write_date}</div>
						<c:choose>
                              <c:when test="${i.my_submit eq '0'}">
                                 <div class="ox" id="x">x</div>
                              </c:when>
                              <c:otherwise>
                                 <div class="ox" id="o">o</div>
                              </c:otherwise>
                       </c:choose>
					</div>
				</c:forEach>
			</div>
			<div class="empty"></div>

			<div class="listFooter">
				<div class="page_nav_container">
					<span>${navi}</span>
				</div>
				<div class="empty"></div>
			</div>
		</div>
	</main>
</body>
</html>
