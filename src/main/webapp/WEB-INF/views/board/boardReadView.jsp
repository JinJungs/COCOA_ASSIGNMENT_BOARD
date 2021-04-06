<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<style>
	.nav-container, .nav-listContents{
		z-index:10;
	}
	
</style>
<meta charset="UTF-8">
<title>코코아</title>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<link rel="stylesheet" href="/resources/css/readView.css"
	type="text/css" media="screen" />
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
	media="screen" />
<script src="/resources/js/summernote/summernote-lite.js"></script>
<script src="/resources/js/summernote/lang/summernote-ko-KR.js"></script>
<link rel="stylesheet"
	href="/resources/css/summernote/summernote-lite.css">
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<header>
		<div>와글와글게시판</div>
		<div class="line"></div>
	</header>
	<main>
		<div class="container">
			<form action="/board/modBoardContents.board" method="post"
				id="main_form">
				<input type="hidden" name="cpage" value="${cpage}"> <input
					type="hidden" name="seq" value="${dto.seq}" />
				<div class=contents>
					<div class="main_header">
						<div class="main_title" id="main_title" ><h2><xmp>${dto.title}</xmp></h2></div>
						<div class="main_profile">
							<div class="main_photo">
								<img src="${imgURL}"/>
							</div>
							<div class="main_writer">${dto.writer_id}</div>
							<div class="main_write_date">${dto.write_date}</div>
						</div>
					</div>

					<div class="main_contents" id="main_contents">
						<div class="filesContainer" id="filesContainer" style=display:none>
							<input type="hidden" id="boardfileCount" value="${fileCount} " />
							<span class="files" id="files" onclick="fn_openModal(${dto.seq})">첨부
								파일</span>
							<div id="myModal" class="modal">
								<!-- Modal content -->
								<div class="modal-content">
									<div class="downloadheader" id="downloadheader">
										<h1 id="downloadtitle">다운로드 목록</h1>
									</div>
									<div id="downloadbox" class="downloadbox"></div>
									<div id="fileuploadbox" class="fileuploadbox"></div>
									<div
										style="cursor: pointer; background-color: #DDDDDD; text-align: center; padding-bottom: 10px; padding-top: 10px;"
										onClick="close_pop();">
										<span class="pop_bt" style="font-size: 13pt;"> 닫기 </span>
									</div>
								</div>

							</div>

						</div>
						<div class="main_content" id="main_content">${dto.contents}</div>
						<div class="main_closecomment">
							<span class="closeComment" style=display:none>댓글 숨기기</span>
						</div>
					</div>
				</div>
				<div class="main_footer">
					<div class="main_btnbox">
						<c:if test="${isAuthBoard>0}">
							<button type=button id="main_btnmod" class="main_btnmod"
								onclick="fn_modBoard(${dto.seq})">수정</button>
							<button type="button" id="main_btndel" class="main_btndel"
								onclick="fn_delBoard(${cpage},${dto.seq})">삭제</button>
						</c:if>
						<button type=button id="main_btnback" class="main_btnback"
							onclick="fn_backtoboard(${cpage})">목록</button>
					</div>
					<div class="main_comment"></div>
				</div>
			</form>
			<div id="commentsContainer" style="">
				<form id="commentForm" name="commentForm" method="get">
					<input type="hidden" id="getboard_seq" name="board_seq"
						value="${dto.seq}">
				</form>
			</div>
			<form id="addcommentForm" name="addCommentForm" method="GET">
				<div class="write">
					<input type="hidden" name="board_seq" value="${dto.seq}" />
					<div class="main_writebox">
						<textarea class="main_write" id="contents" name="contents"
							onclick="fn_loadsummer(${dto.seq})" required></textarea>
					</div>
					<div class="main_wbtnbox">
						<button type=button id="btnwrite" onclick="fn_addcomment()">작성</button>
						<input type=hidden id="btnclose" value="취소"
							onclick="fn_closeSummernote()">
					</div>
				</div>
			</form>
		</div>
	</main>

	<script src="/resources/js/boardreadview.js">
	//게시글로 돌아가기

   	

	</script>
</body>
</html>