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
<!-- <script src="/resources/js/show-modal.js"></script>
 -->
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
					<!-- 하나의 대시보드 카드 -->
					<c:forEach var="i" items="${list}">
						<div class="dashBox" id="dashBox${i.seq}">
							<div class="colorBox" id="colorBox${i.seq}" style="background-color: ${i.color}">
								<button class="btn_updateSubject" data-seq="${i.seq}" data-name="${i.name}" data-contents="${i.contents}" 
								onclick="modal('updateSubModal',${i.seq},'${i.name}','${i.contents}')">⚙</button>
							</div>
							<div class="nameBox" id="nameBox${i.seq}">
								<a href="/pHw/pHwListView.hw?subject_seq=${i.seq}"><xmp>${i.name}</xmp></a>
							</div>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<span id="noSubject">과목이 없습니다.</span>
				</c:otherwise>
			</c:choose>
		</div>
		<br>
		<div class="subjectFooter">
			<button type="button" class="common" id="show-modal" onclick="modal('createSubModal')">과목생성</button>
		</div>

		<!--=============================================== 모달 부분 ===================================================================  -->
		<!-- ***과제생성 시*** 뜨는 모달창 -->
		<div>
			<div class="myModal" id="createSubModal">
				<div class="row2">
					<p>과목 이름 :</p>
					<input type="text" id="subjectName" required placeholder="과목 이름을 입력하세요" maxlength="16">
				</div>
				<div class="row3">
					<p>과목 내용 :</p>
					<textarea id="subjectContents" required placeholder="과목 설명을 입력하세요" maxlength="200"></textarea>
				</div>
				<br> <br>
				<div class="row4">
					<button type="button" id="btn_createSubject" class="common" onclick="createSubject()">과목 등록</button>
					<button type="button" class="common btn_close_Submodal" id = "btn_close_Submodal" style="background-color: #b6b6b6">닫기</button>
				</div>
			</div>
		</div>

		<!-- ***과제수정, 삭제 시 **** 뜨는 모달창  - 톱니바퀴를 클릭해야 뜬다.-->
		<div>
			<div class="myModal" id="updateSubModal">
				<div class="row2">
					<p>과목 이름 :</p>
					<input type="text" id="updSubjectName" required placeholder="과목 이름을 입력하세요">
				</div>
				<div class="row3">
					<p>과목 내용 :</p>
					<textarea id="updSubjectContents" required placeholder="과목 설명을 입력하세요"></textarea>
				</div>
				<br>
				<br>
				<div class="row4">
					<button type="button" id="btn_updateSubject" class="common">수정</button>
					<button type="button" id="btn_deleteSubject" class="common">삭제</button>
					<button type="button" class="common btn_close_Submodal" style="background-color: #b6b6b6">닫기</button>
				</div>
			</div>
		</div>
	</main>
</body>
<script>

/* =============================================== 새로운 모달창 =============================================== */
//모달창 만들어주기
function modal(id,seq,name,contents) {
	console.log($(event.target));
	let zIndex = 9999;
	let modal = $('#' + id);

	// 모달 div 뒤에 희끄무레한 레이어
	let bg = $('<div class=bg>').css({
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
	.find('.btn_close_Submodal').on('click', function() {
		bg.remove();
		modal.hide();	   
	});
	
	 // 수정, 삭제시에는 값을 과목이름과 과목내용에 넣어줘야한다.
    if(id == 'updateSubModal'){     
      // 이름과 내용의 value에 입력해준다.
      // 버튼에 seq를 value로 입력해준다.
      $('#updSubjectName').val(name);
      $('#updSubjectContents').val(contents);
      $('#btn_updateSubject').val(seq);
      $('#btn_deleteSubject').val(seq);
   }
}

	
/* =============================================== 강사 SUBJECT CRUD =============================================== */
	// 과제 생성 - show Modal에서 btn_createSubject 클릭시
	function createSubject() {
	
		// 과제 생성시 랜덤으로 색상값을 지정해준다.

		let colors = [ '#EF4437', '#6E777E', '#8F3E97', '#65499D', '#4554A4',
				'#2083C5', '#35A4DC', '#09BCD3', '#009688', '#43A047',
				'#8BC34A', '#FDC010', '#F8971C', '#F0592B', '#F06291' ];
		let random_color = colors[Math.floor(Math.random() * colors.length)];
			// ajax로 값을 넘겨준다.
			$.ajax({
	    		url: "/pHw/pCreateSubject.hw",
	    		type: "post",
	    		data: {
	    			name : $("#subjectName").val(),
	    			contents : $("#subjectContents").val().trim(),
	    			color: random_color
	    			// 과목이름, 과목 내용, 강사의 담당클래스를 넘겨준다.
	    		},
	    		dataType: "json", // 데이터를 JSON으로 주고 받을 것이다.
	    		success: function(resp){ // color가 데이터베이스에 수정될 경우 result 1 이 온다.
	    			if(resp.result == 1){
		    			alert("과목이 생성되었습니다.");
		    			// modal 창 닫고
		    			$('.bg').remove();
						$('#createSubModal').hide();
		    			// 과목이 새로 생기는 것을 보여줘야한다.
		    			// 비동기로 구현하고 싶으면 처음에 값을 가져올 때부터 비동기로 가져와야한다...
		    			location.href="/pHw/";
		    		}
	    		}
	    	})
		}
	
	// 과제 수정 - show Modal에서 btn_updateSubject 클릭시
	document.getElementById("btn_updateSubject").onclick = function(){
		// ajax로 값을 넘겨준다.
		$.ajax({
    		url: "/pHw/pUpdateSubject.hw",
    		type: "post",
    		data: {
    			name : $("#updSubjectName").val(),
    			contents : $("#updSubjectContents").val(),
    			seq : $(this).val()
    			// 과목이름, 과목 내용, seq를 넘겨준다.
    		},
    		dataType: "json", // 데이터를 JSON으로 주고 받을 것이다.
    		success: function(resp){ // color가 데이터베이스에 수정될 경우 result 1 이 온다.
    			if(resp.result == 1){
	    			alert("과목이 수정되었습니다.");
	    			// modal 창 닫고
	    			$('.bg').remove();
					$('#updateSUbModal').hide();
	    			// 과목이 새로 생기는 것을 보여줘야한다.
	    			// 비동기로 구현하고 싶으면 처음에 값을 가져올 때부터 비동기로 가져와야한다...
	    			location.href="/pHw/";
	    		}
    		}
    	})
	}
	
	// 과제 삭제 - show Modal에서 btn_deleteSubject 클릭시
	document.getElementById("btn_deleteSubject").onclick = function(){
		var really = confirm("삭제 시 해당 과목에 제출된 모든 과제도 삭제되며 다시 복구할 수 없습니다. 정말 삭제하시겠습니까?");
        if(really){
            let pw = prompt('교수자의 비밀번호를 입력하세요 : ');
       		console.log(pw);
       		// ajax로 pwCheck
       		$.ajax({
       			url: "/pHw/pChkPassword.hw",
	    		type: "post",
	    		data: {
	    			pw : pw
	    		},
	    		dataType: "json", // 데이터를 JSON으로 주고 받을 것이다.
	    		success: function(resp){ // color가 데이터베이스에 수정될 경우 result 1 이 온다.
	    			if(!resp.result){
	    				alert('비밀번호가 틀립니다!');
		    			return;
		    		}else{
		    			// ajax로 과목 seq를 넘겨서 과목을 삭제한다.
		    			$.ajax({
		    	    		url: "/pHw/pDeleteSubject.hw",
		    	    		type: "post",
		    	    		data: {
		    	    			seq : $('#btn_deleteSubject').val()
		    	    			// 과목 seq만 넘겨준다.
		    	    		},
		    	    		dataType: "json", // 데이터를 JSON으로 주고 받을 것이다.
		    	    		success: function(resp){ // color가 데이터베이스에 수정될 경우 result 1 이 온다.
		    	    			if(resp.result == 1){
		    		    			alert("과목이 삭제되었습니다.");
		    		    			// modal 창 닫고
		    		    			$('.bg').remove();
		    						$('#updateSUbModal').hide();
		    		    			// 과목이 새로 생기는 것을 보여줘야한다.
		    		    			// 비동기로 구현하고 싶으면 처음에 값을 가져올 때부터 비동기로 가져와야한다...
		    		    			location.href="/pHw/";
		    		    		}
		    	    		}
		    	    	})
		    		}
	    		}
       		})

		}else {
			location.href = "#";
		}
	}

	// getElementsByClassName는 변수명 통째로 함수를 실행할 수는 없다.
	// dashBox 변수선언
	let dashBox = document.getElementsByClassName("dashBox");

	// 1. dashBox 클릭시 해당 과목게시판으로 이동
 	<c:forEach var="i" items="${list}">
		document.getElementById("colorBox${i.seq}").onclick = function(e) {
			console.log("colorBox 클릭 : " +e.target);
			if(e.target !==this) return;
			location.href = "/pHw/pHwListView.hw?subject_seq=${i.seq}";
		}
		document.getElementById("nameBox${i.seq}").onclick = function(e) {
			console.log("nameBox 클릭 : " +e);
			location.href = "/pHw/pHwListView.hw?subject_seq=${i.seq}";
		}
	</c:forEach>

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