<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
request.setCharacterEncoding("UTF-8");
response.setHeader("pragma", "No-cache");
response.setHeader("Cache-Control", "no-cache");
response.addHeader("Cache-Control", "No-store");
response.setDateHeader("Expires", 1L);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/resources/css/dashBoard.css" type="text/css" media="screen" />
<!-- include libraries(jQuery) -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<header>
		<div><xmp class="headerXmp">${hwView.subject_name}-${hwView.list_title}</xmp></div>
		<div class="line"></div>
	</header>
	<main>
		<div class="readTitleBox">
			<b><xmp class="readTitleBoxXmp">${dto.title}</xmp></b>
		</div>
		<div class="readHeader">
			<div class="readWriter"><xmp>${dto.writer_id}</xmp></div>
			<div class="readHDivider">|</div>
			<div class="readWrite_date">${dto.write_date}</div>
			<div class="readView_count">조회 ${dto.view_count}</div>
		</div>
		<!-- My modal -->
		<div class="filesContainer" id="filesContainer">
			<span class="files" id="files" onclick="modal('myModal')">첨부 파일</span>
			<div class="myModal" id="myModal">
				<div class="fileList">
					<div class="downloadTitle">
						<h1>다운로드 목록</h1>
					</div>
					<ul>
					<c:forEach var="i" items="${fileList}">
						<li class="fileLi">
							<a href="/files/downloadHwFiles.files?seq=${i.seq}&savedname=${i.savedname}&oriname=${i.oriname}">${i.oriname}</a>
						</li>	
					</c:forEach>
					</ul>
				</div><br>
				<div class="div_close_modal">
					<span id="btn_close_modal">닫기</span>
				</div>
			</div>
		</div>
		<div class="readContentsBox">${dto.contents}</div>
		<div class="readFooter">
			<!-- 글쓴이에게만 보이도록 - us_id값과 ${dto.writer_id}가 같을 때-->
			<c:choose>
				<c:when test="${us_id==dto.writer_id}">
					<button type="button" class="common" id="btn_update">수정</button>
					<button class="common" id="btn_delete">삭제</button>
				</c:when>
			</c:choose>
			<div class="empty"></div>
		</div>

		<script>
			// 수정 페이지로 이동
			document.getElementById("btn_update").onclick = function() {
				location.href = "/hw/hwSubmitUpdate.hw?subject_name=${hwView.subject_name}"
						+ "&list_title=${hwView.list_title}"
						+ "&list_seq=${hwView.list_seq}&seq=${dto.seq}";
			}

			// 정말 삭제하시겠습니까 ? 알림창을 띄운 후 예를 누르면 삭제되었습니다 알림창 페이지로 이동하는게 좋을 것 같다.
			document.getElementById("btn_delete").onclick = function() {
				let confirmDelete = confirm("정말 삭제하시겠습니까 ?");
				if (confirmDelete) {
					location.href = "/hw/hwSubmitDelete.hw?list_seq=${hwView.list_seq}&seq=${dto.seq}";
				} else {
					location.href = "#";
				}
			}

			// 화면을 불러올 때 ${fileList}를 검사해서 값이 있을 때만 첨부파일 텍스트를 보이게 하기
			$(document).ready(function() {
				if ("${fileList.size()>0}") {
					$('#filesContainer').show();
				}
			});

			// 모달창 만들어주기
			function modal(id) {
				let zIndex = 9999;
				let modal = $('#' + id);

				// 모달 div 뒤에 희끄무레한 레이어
				let bg = $('<div>').css({
					position : 'fixed',
					zIndex : zIndex,
					left : '0px',
					top : '0px',
					width : '100%',
					height : '100%',
					overflow : 'auto',
					// 레이어 색갈은 여기서 바꾸면 됨
					backgroundColor : 'rgba(0,0,0,0.4)'
				}).appendTo('body');

				modal
					.css(
						{
						position : 'fixed',
						boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

						// 시꺼먼 레이어 보다 한칸 위에 보이기
						zIndex : zIndex + 1,

						// div center 정렬
						top : '50%',
						left : '50%',
						transform : 'translate(-50%, -50%)',
						msTransform : 'translate(-50%, -50%)',
						webkitTransform : 'translate(-50%, -50%)'
					}).show()
				// 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
				.find('#btn_close_modal').on('click', function() {
					bg.remove();
					modal.hide();
				});
			}
		</script>
	</main>
</body>
</html>