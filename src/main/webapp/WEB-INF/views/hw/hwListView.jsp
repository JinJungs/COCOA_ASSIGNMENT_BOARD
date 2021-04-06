<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
	media="screen" />
<link rel="stylesheet" href="/resources/css/hwList.css" type="text/css"
	media="screen" />
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<div class="navbar"></div>
	<header><xmp class="headerXmp">과제 리스트 (${className} / ${classProf} 강사님)</xmp></header>
	<main>
		<div class="list-container">
			<div class="hwLabel">
			<div class="hwLabelItem hwLabelSubject"
				style="background-color:${hwView.color};">
				<div><xmp class="hwLabelSubjectXmp">${hwView.subject_name}</xmp></div>
				<!-- (Subject : name = hw_list : subject_seq) -->
			</div>
			<div class="hwLabelItem hwLabelHw">
				<div><xmp>${sContents}</xmp></div>
			</div>
		</div>
		<%-- <div class="subjectContents">
			<!-- subject 테이블의 contents -->
			${sContents}
		</div> --%>
		<!-- title, contents, start_date, end_date, subject_seq -->
		<div class="container">
			<div class="listHead hwList-lh-pro"
				style="background-color:${hwView.color};">
				<div class="hTitle">과제</div>
				<div class="empty"></div>
				<div class="hDate start">등록일</div>
				<div class="hDate end">마감일</div>
				<div class="hOx">제출여부</div>
			</div>
			<!-- 해결할 점 : 제출여부, 제출 페이지 연결 -->
			<div class="listContents">
				<c:choose>
					<c:when test="${not empty list}">
						<c:forEach var="dto" items="${list}">
							<div class="listItem hwList-li-pro">
								<div class="title">
									<a href="/hw/hwSubmit.hw?list_seq=${dto.seq}&cpage=1">
										<xmp class="titleXmp">${dto.title}</xmp></a>
								</div>
								<div class="empty"></div>
								<div class="date start">${dto.start_date}</div>
								<div class="date end">${dto.end_date}</div>
								<c:choose>
									<c:when test="${dto.my_submit eq '0'}">
										<div class="ox" id="x">x</div>
									</c:when>
									<c:otherwise>
										<div class="ox" id="o">o</div>
									</c:otherwise>
								</c:choose>
							</div>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<div class="listItem submitMsg">
							<div>등록된 과제가 없습니다. 과제를 등록하십시오.</div>
						</div>
					</c:otherwise>
				</c:choose>
				<div class="footer"></div>
			</div>
		</div>
		</div>
	</main>
</body>
</html>