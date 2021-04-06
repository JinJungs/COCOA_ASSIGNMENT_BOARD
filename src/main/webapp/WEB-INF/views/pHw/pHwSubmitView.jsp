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
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<style type="text/css">
input[type="radio"] + label {
  display: inline-block;
  padding: 7px;
  background-color: var(--text-secondary);
  color: #949494;
  cursor: pointer;
  border-radius: 2px 2px 0 0;
}
input[type="radio"]:checked + label {
  background: ${hwView.color};
  color: var(--text-secondary);
}
</style>
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<header> <xmp class="headerXmp">과제 제출 게시판 (${className} / ${profName} 강사님) </xmp> </header>
	<main>
		<div class="list-container">
			<div class="hwLabel">
				<div class="hwLabelItem hwLabelSubject"
					style="background-color:${hwView.color};">
					<div><xmp class="hwLabelSubjectXmp">${hwView.subject_name}</xmp></div>
				</div>
				<div class="hwLabelItem hwLabelContents">
					<b><xmp>${hwView.list_title}</xmp><br>
					</b>
					<p><xmp>${hwListOne.contents}</xmp></p>
				</div>
				<div class="hwLabelItem hwLabelBtns">
					<button type="button" class="common" id="btnToDash">홈</button>
					<button type="button" class="common" id="btnToList">리스트</button>
					<button type="button" class="common" id="btnToCreate">공지등록</button>
				</div>
			</div>

			<div class="tab-content">
				<input type="radio" class="tab-radio" name="tabmenu" id="tab01"
					checked> <label for="tab01">과제 게시판</label> <input
					type="radio" class="tab-radio" name="tabmenu" id="tab02"> <label
					for="tab02">미제출 목록</label>

				<div class="conbox con1">
					<div class="container">
						<div class="listHead hwSubmit-lh-pro"
							style="background-color:${hwView.color};">
							<div class="hSeq">번호</div>
							<div class="hTitle">과제</div>
							<div class="hWriter">작성자</div>
							<div class="hDate writen">작성일</div>
							<div class="hView">조회수</div>
						</div>
						<div class="submitListContents">
							<div class="notion">
								<c:choose>
									<c:when test="${not empty notice}">
										<c:forEach var="ntc" items="${notice}">
											<div class="listItem hwSubmit-li-pro noticeOnTop">
												<div class="seq">공지</div>
												<div class="title">
													<a
														href="/pHw/pHwSubmitRead.hw?seq=${ntc.seq}
									&subject_name=${hwView.subject_name}
									&list_title=${hwView.list_title}
									&list_seq=${hwView.list_seq}"><xmp class=titleXmp>${ntc.title}</xmp></a>
												</div>
												<div class="writer"><xmp>${profName}</xmp></div>
												<div class="date writen">${ntc.write_date}</div>
												<div class="view">${ntc.view_count}</div>
											</div>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<div class="listItem submitMsg noticeOnTop">
											<div>등록된 공지가 없습니다.</div>
										</div>
									</c:otherwise>
								</c:choose>

								<c:choose>
									<c:when test="${not empty submitList}">
										<c:forEach var="dto" items="${submitList}">
											<div class="listItem hwSubmit-li-pro">
												<div class="seq">${dto.seq}</div>
												<div class="title">
													<a
														href="/pHw/pHwSubmitRead.hw?seq=${dto.seq}
									&subject_name=${hwView.subject_name}
									&list_title=${hwView.list_title}
									&list_seq=${hwView.list_seq}"><xmp class=titleXmp>${dto.title}</xmp></a>
												</div>
												<div class="writer"><xmp>${dto.name}</xmp></div>
												<div class="date writen">${dto.write_date}</div>
												<div class="view">${dto.view_count}</div>
											</div>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<div class="listItem submitMsg">
											<div>등록된 과제가 없습니다.</div>
										</div>
									</c:otherwise>
								</c:choose>
							</div>
							<div class="boardPages">${navi}</div>
						</div>
						<!-- SEARCH FUNC, TO BE CONTINUE... -->
						<!-- 					<div class="hwSearch">
						<form action="">
							<select name="hwSearch" id="hwSearch">
								<option value="contents">내용</option>
								<option value="title">제목</option>
								<option value="writer_id">작성자</option>
							</select> <input type="text" class="hwSearchBar" id="hwSearchBar" /> <input
								type="hidden" name="cpage" value="1" /> <input type="hidden"
								name="s" value="t" /> <input type="submit" class="hwSearchBtn"
								value="검색">
						</form>
					</div> -->
						<div class="boardFoot"></div>
					</div>
				</div>
				<!-- 제출여부 확인 -->
				<div class="conbox con2">
					<div class="stdSubmit-container stdMargin">
						<div class="listHead stdSubmit-li-pro"
							style="background-color:${hwView.color};">
							<div class="h-stdSubmit">작성자</div>
							<div class="h-stdSubmit">메일</div>
							<div class="h-stdSubmit writen">확인</div>
						</div>
						<div class="submitListContents">
							<div class="notion">
								<c:forEach var="std" items="${stdSubmit}">
									<div class="listItem stdSubmit-li-pro">
										<div class="stdSubmit"><xmp class=xmpsubmit>${std.name}(${std.us_id})</xmp></div>
										<div class="stdSubmit"><xmp class=xmpsubmit>${std.email}</xmp></div>
										<div class="date stdSubmit">제출</div>
									</div>
								</c:forEach>
							</div>
						</div>
					</div>
					<div class="stdSubmit-container">
						<div class="listHead stdSubmit-li-pro"
							style="background-color:${hwView.color};">
							<div class="h-stdSubmit">작성자</div>
							<div class="h-stdSubmit">메일</div>
							<div class="hDate h-stdSubmit">확인</div>
						</div>
						<div class="submitListContents">
							<div class="notion">
								<c:forEach var="std" items="${stdNonSubmit}">
									<div class="listItem stdSubmit-li-pro">
										<div class="stdSubmit"><xmp class=xmpsubmit>${std.name}(${std.us_id})</xmp></div>
										<div class="stdSubmit"><xmp class=xmpsubmit>${std.email}</xmp></div>
										<div class="date stdSubmit">미제출</div>
									</div>
								</c:forEach>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>

	</main>
	<script type="text/javascript">
		document.getElementById("btnToCreate").onclick = function() {

			location.href = "/pHw/pHwSubmitCreate.hw?subject_name=${hwView.subject_name}&list_seq=${hwView.list_seq}&list_title=${hwView.list_title}";
		}
		document.getElementById("btnToDash").onclick = function() {
			location.href = "/pHw/";
		}
		document.getElementById("btnToList").onclick = function() {
			location.href = "/pHw/pHwListView.hw?subject_seq="+${hwView.subject_seq}
			
		}
	</script>
</body>
</html>