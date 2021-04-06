<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
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
	<header><xmp class="headerXmp"> 과제 제출 게시판 (${className} / ${classProf} 강사님)</xmp> </header>
	<main>
		<div class="list-container">
			<div class="hwLabel">
				<div class="hwLabelItem hwLabelSubject"
					style="background-color:${hwView.color};">
					<div><xmp class="hwLabelSubjectXmp">${hwView.subject_name}</xmp></div>
				</div>
				<div class="hwLabelItem hwLabelContents">
					<h3><xmp>${hwView.list_title}</xmp><br>
					</h3>
					<p><xmp>${hwListOne.contents}</xmp></p>
				</div>
				<div class="hwLabelItem hwLabelBtns">
					<button type="button" class="common" id="btnToDash">홈</button>
					<button type="button" class="common" id="btnToList">리스트</button>
					<button type="button" class="common" id="btnToCreate">제출하기</button>
				</div>
			</div>

			<!-- SEARCH FUNC, TO BE CONTINUE... -->
			<!-- <div class="hwSearch">
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
					<div class="submits">
						<c:choose>
							<c:when test="${not empty notice}">
								<c:forEach var="ntc" items="${notice}">
									<div class="listItem hwSubmit-li-pro noticeOnTop">
										<div class="seq">공지</div>
										<div class="title">
											<a
												href="/hw/hwSubmitRead.hw?seq=${ntc.seq}
									&subject_name=${hwView.subject_name}
									&list_title=${hwView.list_title}
									&list_seq=${hwView.list_seq}"><xmp class=titleXmp>${ntc.title}</xmp></a>
										</div>
										<div class="writer"><xmp>${ntc.name}</xmp></div>
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
							<c:when test="${not empty myDTO.title}">
								<div class="listItem hwSubmit-li-pro listOnTop">
									<div class="seq">${myDTO.seq}</div>
									<div class="title">
										<a
											href="/hw/hwSubmitRead.hw?seq=${myDTO.seq}
									&subject_name=${hwView.subject_name}
									&list_title=${hwView.list_title}
									&list_seq=${hwView.list_seq}"><xmp class=titleXmp>${myDTO.title}</xmp></a>
									</div>
									<div class="writer"><xmp>${myDTO.name}</xmp></div>
									<div class="date writen">${myDTO.write_date}</div>
									<div class="view">${myDTO.view_count}</div>
								</div>
							</c:when>
							<c:otherwise>
								<div class="listItem submitMsg listOnTop">
									<div>아직 제출하지 않은 과제입니다. 제출 기한 : ${hwView.end_date}</div>
								</div>
							</c:otherwise>
						</c:choose>

						<c:forEach var="dto" items="${submitList}">
							<div class="listItem hwSubmit-li-pro">
								<div class="seq">${dto.seq}</div>
								<div class="title">
									<a
										href="/hw/hwSubmitRead.hw?seq=${dto.seq}
									&subject_name=${hwView.subject_name}
									&list_title=${hwView.list_title}
									&list_seq=${hwView.list_seq}"><xmp class=titleXmp>${dto.title}</xmp></a>
								</div>
								<div class="writer"><xmp>${dto.name}</xmp></div>
								<div class="date writen">${dto.write_date}</div>
								<div class="view">${dto.view_count}</div>
							</div>
						</c:forEach>
					</div>
					<div class="boardPages">${navi}</div>
				</div>

				<div class="boardFoot"></div>
			</div>

		</div>

	</main>
	<script>
		// 제출하기 버튼 클릭시
		// (1) 한사람당 하나의 글만 제출가능
		// (2) 과제 마감일 이후 제출불가
		// (3) 위의 두 조건을 만족시 제출 글쓰기 페이지로 이동
		// hwSubmitCreate.jsp - 제출 글 쓰기 페이지에서 subject_name과 list_title이 필요
		// hw_submit에 insert 할 때 list_seq가 필요
		document.getElementById("btnToCreate").onclick = function() {
			// 이미 제출했으면 제출할 수 없도록
			<c:choose>
				<c:when test="${not empty myDTO.title}">
					alert("과제를 이미 제출하여 수정만 가능합니다.");
					return;
				</c:when>
				<c:otherwise>
					// 현재의 날짜 불러오기 - timemilli로 치환
					var current_date = new Date();
					current_date.setHours(0,0,0,0);
					var end_date = new Date('${hwView.end_date}');
					end_date.setHours(0,0,0,0);
					if(current_date>end_date){
						alert("마감기한이 지나 과제를 제출할 수 없습니다.");
						return;
					}
		 			location.href = "/hw/hwSubmitCreate.hw?subject_name=${hwView.subject_name}"
						+ "&list_title=${hwView.list_title}"
						+ "&list_seq=${hwView.list_seq}";
				</c:otherwise>
			</c:choose>
		}	
		document.getElementById("btnToDash").onclick = function(){
			location.href = "/hw/";
		}
		document.getElementById("btnToList").onclick = function(){
			location.href = "/hw/hwListView.hw?subject_seq="+${hwView.subject_seq};
		}

	</script>
</body>
</html>